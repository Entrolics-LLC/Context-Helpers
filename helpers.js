
const runQuery = async (db, query) => {
    try {
        let queryType = query?.split(' ')[0]?.toUpperCase()
        console.log('db?.QueryTypes?.[queryType]', db?.QueryTypes?.[queryType])
        const data = await db.query(query, { type: db?.QueryTypes?.[queryType] })
        return Array.isArray(data) ? data?.flat() : data
    }
    catch (e) {
        return []
    }

}

module.exports = {
    runQuery
}