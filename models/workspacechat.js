'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkspaceChat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkspaceChat.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    workspace_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    message: DataTypes.STRING,
    created_at: DataTypes.DATE,
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'WorkspaceChat',
  });
  return WorkspaceChat;
};