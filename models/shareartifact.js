'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShareArtifact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShareArtifact.init({
    artifact_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    share_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShareArtifact',
  });
  return ShareArtifact;
};