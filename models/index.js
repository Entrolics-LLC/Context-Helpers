'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)

var models = {}

const addModels = (db) => {

  fs.readdir(__dirname, (err, folders) => {
    if (err) {
      return
    }


    folders = folders?.map(v => path.join(__dirname, v))?.filter(v => fs?.lstatSync(v)?.isDirectory())

    var files = []
    for (var folder of folders) {
      files.push({
        [folder]: fs.readdirSync(folder).filter(file => {
          return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
        })
      })
    }

    files = files?.flat()

    for (var obj of files) {
      var [dbPath, fileList] = Object.entries(obj)[0]
      for (var y of fileList) {
        var model = require(path.join(dbPath, y))(db, Sequelize.DataTypes)
        models[model.name] = model
      }
    }

    Object.keys(models).forEach(modelName => {
      if (models[modelName].associate) {
        models[modelName].associate(models);
      }
    })

    return models

  })


}

module.exports = addModels