'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserArtifactComments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserArtifactComments.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    artifact_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    status_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    comment: DataTypes.STRING,
    comment_date: DataTypes.DATE,
    comment_delete_date: DataTypes.DATE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UserArtifactComments',
  });
  return UserArtifactComments;
};