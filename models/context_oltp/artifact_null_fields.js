'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artifact_null_fields extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  artifact_null_fields.init({
    artifact_name: DataTypes.STRING,
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    fields: DataTypes.STRING,
    missing_fields: DataTypes.STRING,
    project_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'artifact_null_fields',
  });
  return artifact_null_fields;
};