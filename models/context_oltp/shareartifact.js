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
  };
  ShareArtifact.init({
    artifact_id: DataTypes.STRING,
    share_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'share_artifact',
  });
  return ShareArtifact;
};