const { Sequelize } = require('sequelize')
const exec = require('child_process').exec
const config = require('./config')
const addModels = require('../models')

const init = (dbPath, cloudConfig = config) => {
    try {
        cloudConfig = cloudConfig[dbPath]
        let db = new Sequelize({ ...cloudConfig })
        addModels(db, dbPath)

        console.log('connecting...')
        db.authenticate()

        console.log('Connection has been established successfully.')

        return db
    }
    catch (error) {
        console.error('Unable to connect to the database:', error)

        return null
    }
}

const createDB = () => {
    exec('cd node_modules && cd context-helpers && npm run createDB', (error, stdout, stderr) => {
        console.log('stdout: ' + stdout)
        console.log('stderr: ' + stderr)
        if (error !== null) {
            console.log('exec error: ' + error)
        }
    })
}

const migrateDB = () => {
    exec('cd node_modules && cd context-helpers && npm run createMigration', (error, stdout, stderr) => {
        console.log('stdout: ' + stdout)
        console.log('stderr: ' + stderr)
        if (error !== null) {
            console.log('exec error: ' + error)
        }
    })
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
    migrateDB,
    createDB
}