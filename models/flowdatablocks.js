'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FlowDatablocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FlowDatablocks.init({
    id: DataTypes.STRING,
    flow_name: DataTypes.STRING,
    user_id: DataTypes.STRING,
    flow_json: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    project_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FlowDatablocks',
  });
  return FlowDatablocks;
};