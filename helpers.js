
const runQuery = async (db, query) => {
    try {
        let queryType = query?.split(' ')[0]?.toUpperCase()
        const data = await db.query(query, { type: db?.QueryTypes?.[queryType] })
        return Array.isArray(data) ? data?.flat() : data
    }
    catch (e) {
        console.log('e', e)
        return []
    }

}

module.exports = {
    runQuery
}