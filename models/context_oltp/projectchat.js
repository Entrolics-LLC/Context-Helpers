'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectChat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProjectChat.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
    project_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    message: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'project_chat',
  });
  return ProjectChat;
};