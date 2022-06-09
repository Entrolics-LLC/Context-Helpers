'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FileProperties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FileProperties.init({
    file_id: DataTypes.STRING,
    additional_property_id: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    property_value: DataTypes.STRING,
    project_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FileProperties',
  });
  return FileProperties;
};