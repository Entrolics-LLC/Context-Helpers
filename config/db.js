const { Sequelize } = require('sequelize')
const config = require('./config.json')

let db

const init = async (cloudConfig = config) => {

    db = new Sequelize({ ...cloudConfig })

    try {
        console.log('connecting...')
        await db.authenticate()
        console.log('Connection has been established successfully.')
    }
    catch (error) {
        console.error('Unable to connect to the database:', error)
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
    db,
    init
}