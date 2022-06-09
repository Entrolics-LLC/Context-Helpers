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
    id: DataTypes.STRING,
    workspace_id: DataTypes.STRING,
    message: DataTypes.STRING,
    created_at: DataTypes.DATE,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WorkspaceChat',
  });
  return WorkspaceChat;
};