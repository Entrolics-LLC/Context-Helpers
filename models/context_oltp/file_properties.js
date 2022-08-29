'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class file_properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  file_properties.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: 'CHARACTER VARYING(255)'
    },
    file_id: DataTypes.STRING,
    additional_property_id: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    property_value: DataTypes.STRING,
    project_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'file_properties',
    createdAt: false,
    updatedAt: false
  });
  return file_properties;
};