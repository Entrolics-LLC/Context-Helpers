const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec
const config = require('./config').development

const modelPath = './models'

const sequelizeDB = {}

const init = (cloudConfig = config) => {
    try {
        let db = new Sequelize({ ...cloudConfig, ssl: true, pool: { maxConnections: 5, maxIdleTime: 30 }, language: 'en' })

        console.log('connecting...')
        db.authenticate()
        db.sync()

        console.log('Connection has been established successfully.')

        db.createSchema('context')
            .then(() => console.log('****'))
            .catch((e) => console.log('error'))

        let folders = fs.readdirSync(modelPath)

        folders = folders?.map(v => path.join(__dirname, '../', modelPath, v))?.filter(v => fs?.lstatSync(v)?.isDirectory())

        var files = []

        for (var folder of folders) {
            files.push({
                [folder]: fs.readdirSync(folder).filter(file => {
                    return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js')
                })
            })
        }

        files = files?.flat()

        for (var obj of files) {
            var [dbPath, fileList] = Object.entries(obj)[0]
            for (var y of fileList) {
                var model = require(path.join(dbPath, y))(db, Sequelize.DataTypes)
                sequelizeDB[model.name] = model
            }
        }

        Object.keys(sequelizeDB).forEach(modelName => {
            if (sequelizeDB[modelName].associate) {
                sequelizeDB[modelName].associate(sequelizeDB)
            }
        })

        return db
    }
    catch (error) {
        console.log('Unable to connect to the database:', error)

        return null
    }
}

// const createDB = () => {
//     exec('cd node_modules && cd context-helpers && npm run createDB', (error, stdout, stderr) => {
//         console.log('stdout: ' + stdout)
//         console.log('stderr: ' + stderr)
//         if (error !== null) {
//             console.log('exec error: ' + error)
//         }
//     })
// }

const migrateDB = () => {
    try {
        let migration = process.env.NODE_ENV === 'production' ? 'createMigrationProduction' : 'createMigration'
        exec(`cd node_modules && cd context-helpers && npm run ${migration}`, (error, stdout, stderr) => {
            console.log('stdout: ', stdout)
            console.log('stderr: ', stderr)
            if (error !== null) {
                console.log('exec error: ', error)
            }
        })
    }
    catch (e) {
        console.log('***')
    }
}

// var sequelize = new Sequelize(config.database, config.username, config.password, {
//     host: config.host,
//     port: 5432,
//     maxConcurrentQueries: 100,
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: true
//     },
//     pool: { maxConnections: 5, maxIdleTime: 30 },
//     language: 'en'
// })

module.exports = {
    init,
    migrateDB
}