'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkflowRules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkflowRules.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    route: DataTypes.STRING,
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'WorkflowRules',
  });
  return WorkflowRules;
};