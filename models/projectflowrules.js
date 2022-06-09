'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectFlowRules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectFlowRules.init({
    id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    rule_name: DataTypes.STRING,
    backend_api: DataTypes.STRING,
    input_type: DataTypes.STRING,
    description: DataTypes.STRING,
    rule_icon: DataTypes.STRING,
    rule_type: DataTypes.STRING,
    dropdown_options: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProjectFlowRules',
  });
  return ProjectFlowRules;
};