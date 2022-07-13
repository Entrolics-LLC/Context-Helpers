'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project_workflow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project_workflow.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    user_id: DataTypes.STRING,
    business_function_id: DataTypes.STRING,
    flow_name: DataTypes.STRING,
    flow_json: DataTypes.STRING,
    flow_description: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    gflow_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'project_workflow',
    createdAt: false,
    updatedAt: false
  });
  return project_workflow;
};