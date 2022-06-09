'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdditionalProperties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdditionalProperties.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    property_name: DataTypes.STRING,
    property_type: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AdditionalProperties',
  });
  return AdditionalProperties;
};