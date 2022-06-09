'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Groups.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    group_name: DataTypes.STRING,
    group_description: DataTypes.STRING,
    parent_group_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    organization_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Groups',
  });
  return Groups;
};