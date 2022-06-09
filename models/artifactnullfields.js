'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArtifactNullFields extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArtifactNullFields.init({
    artifact_name: DataTypes.STRING,
    id: DataTypes.STRING,
    fields: DataTypes.STRING,
    missing_fields: DataTypes.STRING,
    project_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ArtifactNullFields',
  });
  return ArtifactNullFields;
};