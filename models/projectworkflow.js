'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectWorkflow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectWorkflow.init({
    id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    business_function_id: DataTypes.STRING,
    flow_name: DataTypes.STRING,
    flow_json: DataTypes.STRING,
    flow_description: DataTypes.STRING,
    created_at: DataTypes.DATE,
    gflow_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProjectWorkflow',
  });
  return ProjectWorkflow;
};