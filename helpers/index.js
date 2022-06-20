const { v4: uuidv4 } = require('uuid')
const axios = require('axios')
const Fuse = require('fuse.js')
const _ = require('lodash')
const { Storage } = require('@google-cloud/storage')
const moment = require('moment')
var jwt = require('jwt-simple')
const isNull = require('./isNull')
const { runQuery } = require('./postgresQueries')
const { projectId, workFlowClient, flowExecutionClient, visionClient, DocAIclient } = require('../config/gcpConfig')

const getGoogleFlow = (name) => (
    new Promise(async (resolve, reject) => {
        try {
            const [response] = await workFlowClient.getWorkflow({ name })
            resolve(response)
        }
        catch (e) {
            reject(e)
        }
    })
)

const getGoogleFlowExecutions = (parent) => (

    new Promise(async (resolve, reject) => {
        try {
            const [response] = await flowExecutionClient.listExecutions({ parent, view: 'FULL' })
            resolve(response)
        }
        catch (e) {
            reject(e)
        }
    })
)

const imageTextDetection = (destination) => {
    return new Promise(async (resolve, reject) => {
        try {
            const [result] = await visionClient.textDetection(destination)
            resolve(result)
        }
        catch (e) {
            reject(e)
        }
    })
}

const getDocumentAIProcessorsList = () => {
    //https://googleapis.dev/nodejs/documentai/latest/v1beta3.DocumentProcessorServiceClient.html#listProcessors
    return new Promise(async (resolve, reject) => {
        try {
            const docAIParent = `projects/${projectId}/locations/us`
            let d = await DocAIclient.listProcessors({ parent: docAIParent })
            let noNulls = d?.filter(Boolean)?.flat()

            let allProcessors = noNulls?.map((d) => {
                let processorName = d?.name
                let processorID = processorName?.slice(processorName?.lastIndexOf('/') + 1, processorName?.length)
                let displayName = d?.displayName
                return { id: processorID, displayName, type: d?.type, state: d?.state }
            })?.filter(d => Boolean(d?.id && d?.state == 'ENABLED'))
            resolve(allProcessors)
        }
        catch (e) {
            reject(e)
        }
    })
}

const doesDocAIProcessorExist = (processorId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let d = await getDocumentAIProcessorsList()
            let allProcessorIds = d?.map(d => d?.id)
            let isExisting = allProcessorIds?.indexOf(processorId) > -1
            resolve(isExisting)
        }
        catch (e) {
            reject(e)
        }
    })
}

const arrayIntoBigqueryArray = (array) => ( //Convert JS Array into Bigquery Array, Use only for array of strings.
    Boolean(Array.isArray(array) && array?.length) ?
        `['${array.toString().split(',').join(`','`)}']`
        : `[]`
)

const keyPairTable = process.env.template_key_pairs
const graphSchemaTable = process.env.template_graph_schema
const projects_graph_schema = process.env.projects_graph_schema

const templatedTable = process.env.templates_table

const tokenSecret = 'access_token'
let minutes = process.env.NODE_ENV === 'production' ? 15 : 60

const origin = process.env?.NODE_ENV ? `https://context-2my7afm7yq-ue.a.run.app` : 'http://localhost:3000'

const readStorage = new Storage({ keyFilename: process.env.keyFilename })

const getAuthUrl = async (uri) => {
    if (uri && uri.length) {
        try {
            const expires = moment(moment(), 'MM-DD-YYYY').add(2, 'days')
            const bucketName = uri.split('/')[2]
            const myBucket = readStorage.bucket(bucketName)

            const config = {
                action: 'read',
                expires: expires,
                accessibleAt: expires
            }

            let file = myBucket.file(uri.replace(`gs://${bucketName}/`, ''))
            let [url] = await file.getSignedUrl(config)
            return url
        }
        catch (e) {
            return uri
        }
    }
    return undefined
}

const validateData = (data) => data ? "'" + data?.replace?.(/'|"/gi, '') + "'" : null

// const emailText = (user) => {
//     const msg = {
//         to: user.email,
//         from: 'entrollics@gmail.com',
//         subject: 'Verify Your Email',
//         text: `Hello ${user.first_name},
//         <br/>
//         <br/>
//         To complete your signup to Context, Please verify your email by clicking the link below:
//         <br />
//         <br />
//         ${origin}/emailverification/${user.token}
//         <br />
//         <br />
//         Alternatively, you can copy the link to your browser's address bar.
//         <br />
//         <br />
//         If you don't use this link within 1 day, the link will be expired.
//         Best regards,
//         <br/>
//         Context.
//         `,
//         html: `Hello ${user.first_name},
//         <br/>
//         <br/>
//         To complete your signup to Context, Please verify your email by clicking the link below:
//         <br />
//         <br />
//         ${origin}/emailverification/${user.token}
//         <br />
//         <br />
//         Alternatively, you can copy the link to your browser's address bar.
//         <br />
//         <br />
//         If you don't use this link within 1 day, the link will be expired.
//         Best regards,
//         <br/>
//         Context.`
//     }

//     transporter.sendMail(msg)
// }

// const forgotEmail = (user) => {
//     const msg = {
//         to: user.email,
//         from: 'entrollics@gmail.com',
//         subject: 'Update your password',
//         text: `Hello ${user.first_name},
//         <br/>
//         <br/>
//         To update your password, Please click the link below:
//         <br />
//         <br />
//         ${origin}/update-password/${user.token}
//         <br />
//         <br />
//         Alternatively, you can copy the link to your browser's address bar.
//         <br />
//         <br />
//         If you don't use this link within 2 days, the link will be expired.
//         Best regards,
//         <br/>
//         Context.
//         `,
//         html: `Hello ${user.first_name},
//         <br/>
//         <br/>
//         To update your password, Please click the link below:
//         <br />
//         <br />
//         ${origin}/update-password/${user.token}
//         <br />
//         <br />
//         Alternatively, you can copy the link to your browser's address bar.
//         <br />
//         <br />
//         If you don't use this link within 2 days, the link will be expired.
//         Best regards,
//         <br/>
//         Context.
//         `
//     }

//     transporter.sendMail(msg)
// }

const updateToken = async (id, db) => {
    try {
        let whereStatement = `WHERE id='${id}' AND is_email_verified=true`
        let sqlQuery = `SELECT * EXCEPT(password) FROM users ${whereStatement}`

        let user = await runQuery(db, sqlQuery)

        if (user.length > 0) {
            user = user[0]
            if (user?.access_token) {
                let decoded = jwt.decode(user?.access_token, tokenSecret)
                if (decoded.exp >= moment().valueOf()) {
                    decoded.exp = moment().add(minutes, 'minutes').valueOf()
                    const updatedToken = jwt.encode(decoded, tokenSecret)
                    sqlQuery = `UPDATE users SET access_token='${updatedToken}' ${whereStatement}`
                    console.log('sqlQuery', sqlQuery)
                    await runQuery(db, sqlQuery)

                    return true
                }
            }
        }

        return false
    }
    catch (e) {
        return false
    }
}

const addToken = async (id, db) => {
    try {
        const token = jwt.encode({
            iss: id,
            exp: moment().add(minutes, 'minutes').valueOf()
        }, tokenSecret)

        let whereStatement = `WHERE id='${id}' AND is_email_verified=true`
        let sqlQuery = `UPDATE users SET access_token='${token}' ${whereStatement}`

        await runQuery(db, sqlQuery)
    }
    catch (e) {
    }
}

const getUniqueArrayOfObjects = (ary, objectPropertName) => {
    let cleanProperty = (property) => typeof property == 'string' ? property?.trim().toLowerCase() : property
    return ary.filter((elem, index) => {
        let filteredByProperty = ary?.findIndex(obj => {
            let obj1V = obj?.[objectPropertName]
            let obj2V = elem?.[objectPropertName]
            let value1 = cleanProperty(obj1V)
            let value2 = cleanProperty(obj2V)
            return value1 == value2
        })
        return filteredByProperty == index
    })
}

const runBigQuery = (query, db) => {

    return new Promise(async (resolve, reject) => {
        try {
            let data = await runQuery(db, query)
            let finalData = (Array.isArray(data) && typeof data?.flat == 'function') ? data?.flat() : []

            return resolve(finalData)
        }
        catch (e) {
            reject(e)
        }
    })
}

const getTemplateData = async (fileUrl, id, processorId, db) => {
    let sqlQuery
    return new Promise(async (resolve, reject) => {
        await axios.post(`https://us-central1-elaborate-howl-285701.cloudfunctions.net/doc_ai_v3_node_http${!isNull(processorId) ? `?processorId=${processorId}` : ''}`, { gcs_input_uri: fileUrl, formKeyPairTableName: 'schema_form_key_pairs', processorId })
            .then(async () => {
                try {
                    sqlQuery = `SELECT * FROM  artifact WHERE id='${id}'`
                    let template = await runQuery(db, sqlQuery)
                    sqlQuery = `SELECT * FROM  ${keyPairTable} WHERE file_name='${template?.artifact_name}'`
                    let keyPairs = await runQuery(db, sqlQuery)
                    let file_address = await getAuthUrl(template.file_address)
                    template.file_address = file_address
                    resolve({
                        success: true,
                        message: 'Successfully Created Form Template',
                        keyPairs,
                        template
                    })
                }
                catch (e) {
                    reject(e)
                }
            })
            .catch((e) => {
                console.log('e in axios getTemplateData', e)
                reject(e)
            })
    })
}

const cleanFieldName = (name, dontTrim) => {
    /**
     
      A column name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and it must start with a letter or underscore. The maximum column name length is 300 characters. A column name cannot use any of the following prefixes:

     */
    let removeExtraSpacesOrUnderScore = (txt) => txt?.replace(/ |\/|\\/gi, '_')?.replace(/__/gi, '_')

    let cleanedWord = removeExtraSpacesOrUnderScore((dontTrim ? name : name?.trim())?.replace(/[^a-z0-9_/\\ ]/gi, ''))
    if (cleanedWord?.startsWith('_')) {
        cleanedWord = cleanedWord?.slice(1, cleanedWord?.length)
        cleanedWord = removeExtraSpacesOrUnderScore(cleanedWord)
    }

    if (!isNaN(cleanedWord?.[0])) {
        cleanedWord = 'a_' + cleanedWord?.slice(0, cleanedWord?.length)
        cleanedWord = removeExtraSpacesOrUnderScore(cleanedWord)


    }
    return cleanedWord
}

const fuseSearch = (key, list, value) => {
    let options = {
        keys: [key]
    }

    let fuse = new Fuse(list, options)

    let result = fuse.search(value)

    return result
}

const matchTemplate = (template, formData) => {

    template = _.unionBy(template, 'column_name')
    formData = _.unionBy(formData, 'key_x1')
    var match = 0
    var matchArr = []
    var matchObj = {}
    let matchValidated = {}
    for (var v of template) {
        v.key_x1 = v.key_x1 * 100
        v.key_x2 = v.key_x2 * 100
        v.key_y1 = v.key_y1 * 100
        v.key_y2 = v.key_y2 * 100

        var score_x1
        var score_x2
        var score_y1
        var score_y2

        var nameResult = fuseSearch('field_name', formData, v.field_name)

        nameResult = nameResult.map(v => v.item)
        if (nameResult?.length > 1) {
            for (var y of nameResult) {
                var isMatch = false
                score_x1 = Math.abs(v.key_x1 - (y.key_x1 * 100))
                score_x2 = Math.abs(v.key_x2 - (y.key_x2 * 100))
                score_y1 = Math.abs(v.key_y1 - (y.key_y1 * 100))
                score_y2 = Math.abs(v.key_y2 - (y.key_y2 * 100))

                if (score_x1 < 1 && score_x2 < 1 && score_y1 < 1 && score_y2 < 1) {
                    matchArr.push(v?.column_name)
                    match++
                    isMatch = true
                    matchObj[v?.column_name] = y?.field_value
                    matchValidated[y?.field_name] = v?.validated_field_name
                }
            }
            if (!isMatch && matchArr.indexOf(v.column_name) === -1) {
                match++
                matchArr.push(v.column_name)
                matchObj[v.column_name] = nameResult[0]?.field_value
                matchValidated[nameResult[0]?.field_name] = v?.validated_field_name
            }
        }
        else {
            if (nameResult?.length) {
                match++
                matchArr.push(v?.column_name)
                matchObj[v?.column_name] = nameResult[0]?.field_value
                matchValidated[nameResult[0]?.field_name] = v?.validated_field_name
            }
        }
    }
    accuracy = (match / template.length) * 100
    console.log('accuracy', `${accuracy}%`)
    return { matchObj, matchValidated }
}

const updateTemplateHelper = async (arr, user_id, id, isCustom, db) => {
    let sqlQuery
    let finalValidatedFieldName
    let uniqueArr = []
    let columnName

    if (isCustom) {
        sqlQuery = `UPDATE ${templatedTable} SET is_ready=${true} WHERE id='${id}'`
        await runQuery(db, sqlQuery)
    }
    else {
        for (var v of arr) {
            finalValidatedFieldName = isNull(v?.validated_field_name) ? v?.field_name : v?.validated_field_name
            columnName = finalValidatedFieldName
            sqlQuery = `UPDATE ${keyPairTable} SET updated_date=CURRENT_TIMESTAMP(), validated_field_name='${finalValidatedFieldName}', data_types=${v?.data_type ? `${JSON.stringify(v?.data_type)}` : null}, updated_by='${user_id}', nullable=${v?.nullable}, column_name='${columnName}' WHERE id='${v?.id}'`
            await runQuery(db, sqlQuery)
                .then((s) => console.log('success'))
                .catch((e) => console.log('error', e))
            uniqueArr.push(finalValidatedFieldName)
        }

        sqlQuery = `UPDATE artifact SET is_verified=${true} WHERE artifact_name='${v?.file_name}'`
        await runQuery(db, sqlQuery)
        sqlQuery = `UPDATE ${templatedTable} SET is_ready=${true} WHERE id='${id}'`
        await runQuery(db, sqlQuery)
    }

}

const graphSchemHelper = async (template_id, user_id, graph_schema, db) => {

    let sqlQuery

    for (var v of graph_schema) {
        let source_name = v?.source
        let target_name = v?.target
        let source_id = v?.source_id
        let target_id = v?.target_id
        let relation = v?.relation

        sqlQuery = `INSERT INTO ${graphSchemaTable} VALUES('${template_id}', '${user_id}', '${source_name}', '${target_name}', '${source_id}', '${target_id}', '${relation}', '${uuidv4()}')`

        await runQuery(db, sqlQuery)
            .then((s) => console.log('success from graphSchemHelper', s))
            .catch((e) => console.log('error from graphSchemHelper', e?.errors))
    }
}

const formMatching = async (obj, db) => {
    try {
        let { keyPairTable, template_file_name, fileUrl, fileName, fileId, bQTable, table_name } = obj

        let sqlQuery = `SELECT * FROM ${keyPairTable} WHERE file_name='${template_file_name}' AND column_name IS NOT NULL`

        let template = await runQuery(db, sqlQuery)
        template = template?.flat()

        await axios.post(`https://offline-doc-ai-2my7afm7yq-uc.a.run.app`, { gcs_input_uri: fileUrl, formKeyPairTableName: 'schema_form_key_pairs' })
            .then(async () => {
                sqlQuery = `SELECT * FROM  ${keyPairTable} WHERE file_name='${fileName}'`

                var formData = await runQuery(db, sqlQuery)
                formData = formData?.flat()

                var { matchObj, matchValidated } = await matchTemplate(template, formData)

                let newResponse = {}
                for (var [key, value] of Object.entries(matchObj)) {
                    if (value !== null) {
                        newResponse[key] = value
                    }
                }

                var columnNames = ['id', 'file_name', 'created_at', ...Object.keys(newResponse)]
                columnNames = columnNames.toString()
                var columnValues = [fileId, fileName, new Date(), ...Object.values(newResponse)]
                columnValues = columnValues.map(v => validateData(v))

                sqlQuery = `INSERT INTO \`${bQTable}.${table_name}\` (${columnNames}) VALUES (${columnValues})`
                await runQuery(db, sqlQuery)

                for (var [key, value] of Object.entries(matchValidated)) {
                    await runQuery(db, sqlQuery)
                }
                console.log('done')
            })
    }
    catch (e) {
        console.log('err', e)
    }
}

const formLoop = async (arr, is_custom, db) => {
    let opt

    console.log('arr', arr?.length)
    console.log('arr', arr)

    let myPromises = arr.map(v => {
        v.gcs_input_uri = v?.fileUrl
        v.formKeyPairTableName = `schema_form_key_pairs`

        return axios.post(v?.template_id ?
            `https://us-central1-${projectId}.cloudfunctions.net/form_matching` :
            `https://offline-doc-ai-2my7afm7yq-uc.a.run.app`,
            v
        )
    })

    console.log('myPromises', myPromises)

    let response = await Promise.allSettled(myPromises)
    console.log('response***', response)

    let secondPromise = []

    for (var v of response) {
        opt = v?.value?.data

        if (!opt?.success) {
            console.log('second try', opt)
            secondPromise.push(Promise.resolve(axios.post(opt?.template_id ?
                `https://us-central1-${projectId}.cloudfunctions.net/form_matching` :
                `https://offline-doc-ai-2my7afm7yq-uc.a.run.app`,
                opt?.body
            )))
        }
    }

    console.log('after Loop***')

    await Promise.allSettled(secondPromise)

    console.log('secondPromise')

    let dlpRedactionPromises = arr.map((d) => axios.post(`https://us-central1-elaborate-howl-285701.cloudfunctions.net/dlp-redaction-js`, {
        projectID: projectId,
        bucket_name: 'context_primary',
        file_name: d?.fileName,
        file_gs_link: d?.fileUrl
    }))

    await Promise.allSettled(dlpRedactionPromises)

    console.log('console after dlp redaction')

    let ids = arr.map(d => `'${d?.fileId}'`)

    let sqlQuery = `UPDATE artifact SET is_completed = ${true} WHERE id IN (${ids})`
    await runQuery(db, sqlQuery)
        .then((res) => console.log('res complete', res))
        .catch((e) => console.log('e', e))

    console.log('done****')

    let myPromises2 = arr.map(v => axios.post(`https://us-central1-${projectId}.cloudfunctions.net/push_notification`, v))

    await Promise.allSettled(myPromises2)

    console.log('console after form matching')

    let pendingRr = arr.map((d) => axios.post(`https://us-central1-${projectId}.cloudfunctions.net/pdf_data_to_neo4j`, {
        table_name: projects_graph_schema,
        project_name: d?.project_name,
        file_name: d?.fileName,
        original_artifact_name: d?.original_artifact_name,
        user_id: d?.user_id,
        user_email: d?.user_email,
        is_custom: is_custom,
        project_id: d?.project_id
    }))
    await Promise.allSettled(pendingRr)

    console.log('console after data to neo4j')

    let pendingR = arr.map((d) => axios.post(`https://us-central1-${projectId}.cloudfunctions.net/dlp_javascript`, {
        projectId: projectId,
        project_name: d?.project_name,
        file_name: d?.original_artifact_name,
        file_id: d?.fileName,
        source_url: d?.fileUrl
    }))

    await Promise.allSettled(pendingR)

    console.log('console after dlp')

}

const dataToNeo4jloop = (arr) => {
    let pendingR = arr.map(d => axios.post(`https://us-central1-${projectId}.cloudfunctions.net/pdf_data_to_neo4j`, {
        table_name: 'context.schema_form_key_pairs',
        project_name: d?.project_name,
        file_name: d?.fileName,
        original_artifact_name: d?.original_artifact_name,
        user_id: d?.user_id,
        user_email: d?.user_email
    }))
    return Promise.allSettled(pendingR)
}

const dlpFunction = (arr) => {
    let pendingR = arr.map(d => axios.post(`https://us-central1-${projectId}.cloudfunctions.net/data_loss_prevention_document`, {
        project_name: d?.project_name,
        file_name: d?.original_artifact_name,
        file_id: d?.fileName,
        source_url: d?.fileUrl
    }))
    return Promise.allSettled(pendingR)
}


const COMPLETED = 'COMPLETED'
const PROCESSING = 'PROCESSING'
const FAILED = 'FAILED'

const createSchedule = async ({ uri, method = 'POST', schedule = '*/5 * * * *', id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const parent = client.locationPath(projectId, 'us-central1')
            const job = {
                httpTarget: {
                    uri: uri,
                    httpMethod: method,

                    ...id ? { body: Buffer.from(`${id}`) } : {}

                },
                schedule: schedule,
                timeZone: 'America/Los_Angeles'
            }

            const request = {
                parent: parent,
                job: job
            }

            const [response] = await client.createJob(request)
            console.log('Created job: ', response.name)
            resolve(response)
        }
        catch (e) {
            console.log('er in catch==>', e)
            reject(e)
        }
    })
}

const setProcessingStatus = ({ status, id, additonalKeys }, db) => {
    let sqlQuery = `UPDATE artifact SET updated_at=CURRENT_DATETIME(), importing_status='${PROCESSING}' ${additonalKeys || ''} WHERE id='${id}'`

    return db.query(sqlQuery)
}



const getProjectDetails = (project_id) => {
    if (!isNull(project_id)) {
        const myQuery = `SELECT  * FROM \`context_oltp.projects\` where id='${project_id}'`
        return runBigQuery(myQuery)
    } else {
        throw new Error(`ProjectId is required`)
    }

}

const getProjectFlow = (flow_id) => {
    if (!isNull(flow_id)) {
        const myQuery = `SELECT  f.id,f.gflow_id,f.flow_name,f.flow_json, f.flow_description,f.created_at, b.name as bf_name, b.description as bf_description, u.first_name, u.last_name,u.avatar,u.email FROM \`context_oltp.project_workflow\` f LEFT JOIN context.bussiness_functions b ON b.id=f.business_function_id LEFT JOIN context_oltp.users u ON u.id=f.user_id where f.id='${flow_id}'`
        return runBigQuery(myQuery)
    } else {
        throw new Error(`flowid is required`)
    }

}

const folderRecursive = async (client, folderEntries) => {
    let fileAndFolders = []

    for (var i in folderEntries) {
        if (folderEntries[i]?.type === 'folder') {
            await client.folders.get(folderEntries[i]?.id)
                .then(async (folder) => {
                    var obj = {
                        title: folder?.name,
                        key: folder?.id
                    }

                    obj.children = await folderRecursive(client, folder?.item_collection?.entries)
                    fileAndFolders.push(obj)
                })
        }
        else {
            await client.files.get(folderEntries[i]?.id)
                .then((file) => {
                    var obj = {
                        title: file?.name,
                        key: file?.id,
                        isLeaf: true
                    }
                    fileAndFolders.push(obj)
                })
        }
    }

    return fileAndFolders
}
const getVideoJSONKeys = (json) => {
    let excludeKeys = ['labelannotations', 'explicitannotation', 'segmentlabelannotations', 'shotlabelannotations', 'persondetectionannotations']
    let keys = Object.keys(json)

    let filteredKeys = keys?.filter(key => {
        let lowerCasedKey = key?.trim()?.toLowerCase()
        return excludeKeys?.indexOf(lowerCasedKey) < 0 && lowerCasedKey?.indexOf('annotation') >= 0
    })
    return filteredKeys
}

const parseVideoData = (json) => (
    json?.map((d) => {
        const entity = d?.entity || { thumbnail: d?.thumbnail }
        const tracks = d?.tracks?.map(a => ({ confidence: a?.confidence, frames: a?.timestampedObjects, segment: a?.segment, entity }))

        return tracks

    })?.flat?.()
)

module.exports = {
    runBigQuery,
    parseVideoData,
    getVideoJSONKeys,
    getProjectDetails,
    getProjectFlow,
    arrayIntoBigqueryArray,
    imageTextDetection,
    getDocumentAIProcessorsList,
    runBigQuery,
    createSchedule,
    setProcessingStatus,
    getUniqueArrayOfObjects,
    getAuthUrl,
    validateData,
    updateToken,
    addToken,
    getTemplateData,
    cleanFieldName,
    matchTemplate,
    updateTemplateHelper,
    formMatching,
    formLoop,
    dataToNeo4jloop,
    dlpFunction,
    graphSchemHelper,
    doesDocAIProcessorExist,
    getGoogleFlow,
    getGoogleFlowExecutions,
    folderRecursive
}