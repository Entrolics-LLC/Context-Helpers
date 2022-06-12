'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ai_flow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ai_flow.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    flow_name: DataTypes.STRING,
    flow_owner: DataTypes.STRING,
    flow_json: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ai_flow',
  });
  return ai_flow;
};