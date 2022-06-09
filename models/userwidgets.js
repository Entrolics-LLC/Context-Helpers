'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserWidgets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserWidgets.init({
    id: DataTypes.STRING,
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    layout: DataTypes.STRING,
    properties: DataTypes.STRING,
    user_id: DataTypes.STRING,
    workspace_id: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UserWidgets',
  });
  return UserWidgets;
};