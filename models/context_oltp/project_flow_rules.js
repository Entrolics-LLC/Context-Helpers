'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project_flow_rules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project_flow_rules.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    user_id: DataTypes.STRING,
    rule_name: DataTypes.STRING,
    backend_api: DataTypes.STRING,
    input_type: DataTypes.STRING,
    description: DataTypes.STRING,
    rule_icon: DataTypes.STRING,
    rule_type: DataTypes.STRING,
    dropdown_options: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'project_flow_rules',
    createdAt: false,
    updatedAt: false
  });
  return project_flow_rules;
};