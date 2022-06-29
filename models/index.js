'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)

var models = {}

const addModels = async (db, dbPath = 'context') => {
  let files = fs.readdirSync(path.join(__dirname, `/${dbPath}`)).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  return files.forEach(file => {
    const model = require(path.join(__dirname, `/${dbPath}`, file))(db, Sequelize.DataTypes)
    models[model.name] = model

    return models
  })
}

module.exports = addModels
