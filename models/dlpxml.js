'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DlpXml extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DlpXml.init({
    file_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    value: DataTypes.STRING,
    type: DataTypes.STRING,
    likelihood: DataTypes.STRING,
    created_at: DataTypes.DATE,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DlpXml',
  });
  return DlpXml;
};