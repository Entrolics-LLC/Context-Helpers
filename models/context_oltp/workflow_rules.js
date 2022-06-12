'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workflow_rules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  workflow_rules.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    route: DataTypes.STRING,
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'workflow_rules',
  });
  return workflow_rules;
};