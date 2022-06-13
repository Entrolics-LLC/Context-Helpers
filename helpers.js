
const runQuery = async (db, query) => {
    const data = await db.query(query, { type: db?.QueryTypes?.SELECT })

    return data
}

module.exports = {
    runQuery
}