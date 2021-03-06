'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project_properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project_properties.init({
    project_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    additional_properties_id: DataTypes.ARRAY(DataTypes.STRING),
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'project_properties',
    createdAt: false,
    updatedAt: false,
    id: false
  });
  return project_properties;
};