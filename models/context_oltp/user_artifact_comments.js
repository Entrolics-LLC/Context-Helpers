'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_artifact_comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_artifact_comments.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    artifact_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    status_id: DataTypes.STRING,
    parent_id: DataTypes.STRING,
    comment: DataTypes.STRING,
    comment_date: DataTypes.DATE,
    comment_delete_date: DataTypes.DATE,
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
    modelName: 'user_artifact_comments',
    createdAt: false,
    updatedAt: false
  });
  return user_artifact_comments;
};