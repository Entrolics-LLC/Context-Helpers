'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArtifactSearch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArtifactSearch.init({
    file_name: DataTypes.STRING,
    artifact_type: DataTypes.STRING,
    artifact_extension: DataTypes.STRING,
    original_artifact_name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    email: DataTypes.STRING,
    artifact_size: DataTypes.STRING,
    file_address: DataTypes.STRING,
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    folder_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    project_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ArtifactSearch',
  });
  return ArtifactSearch;
};