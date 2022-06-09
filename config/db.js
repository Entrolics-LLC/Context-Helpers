const { Sequelize } = require('sequelize')
const config = require('./config.json')

let sequelize

const init = async (cloudConfig = config) => {

    sequelize = new Sequelize({ ...cloudConfig })

    try {
        console.log('connecting...')
        await sequelize.authenticate()
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
    sequelize,
    init
}