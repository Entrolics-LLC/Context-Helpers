'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flow_datablocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  flow_datablocks.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    flow_name: DataTypes.STRING,
    user_id: DataTypes.STRING,
    flow_json: "CHARACTER VARYING(1048576)",
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    project_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'flow_datablocks',
    createdAt: false,
    updatedAt: false
  });
  return flow_datablocks;
};