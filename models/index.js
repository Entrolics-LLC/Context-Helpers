'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)

let files = fs.readdirSync(__dirname).filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
})

var models = {}

const addModels = async (db) => {
  return files.forEach(file => {
    const model = require(path.join(__dirname, file))(db, Sequelize.DataTypes)
    models[model.name] = model

    return models
  })
}

module.exports = addModels
