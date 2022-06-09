'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApproveArtifact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ApproveArtifact.init({
    id: DataTypes.STRING,
    artifact_id: DataTypes.STRING,
    share_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.STRING,
    approved_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ApproveArtifact',
  });
  return ApproveArtifact;
};