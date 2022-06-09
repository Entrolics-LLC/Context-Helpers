
const runQuery = async (db, query) => {
    const data = await db.query(query)

    data
}

module.exports = {
    runQuery
}