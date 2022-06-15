
const runQuery = async (db, query) => {
    let queryType = query?.split(' ')[0]?.toUpperCase()
    const data = await db.query(query, { type: db?.QueryTypes?.[queryType] })
    return Array.isArray(data) ? data?.flat() : data
}

module.exports = {
    runQuery
}