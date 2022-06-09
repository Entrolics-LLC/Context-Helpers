'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artifact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artifact.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    artifact_name: DataTypes.STRING,
    organization_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    artifact_description: DataTypes.STRING,
    summary_text: DataTypes.STRING,
    modified_by: DataTypes.STRING,
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    artifact_type: DataTypes.STRING,
    status_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    file_address: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    original_artifact_name: DataTypes.STRING,
    artifact_size: DataTypes.STRING,
    form_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    file_type: DataTypes.STRING,
    form_name: DataTypes.STRING,
    is_validate: DataTypes.BOOLEAN,
    md5: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN,
    is_template: DataTypes.BOOLEAN,
    template_name: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN,
    is_completed: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    training_operation_name: DataTypes.STRING,
    dataset_csv: DataTypes.STRING,
    dataset_directory_path: DataTypes.STRING,
    training_status: DataTypes.STRING,
    schedule_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    importing_operation_name: DataTypes.STRING,
    importing_status: DataTypes.STRING,
    numberOfAttempts: DataTypes.INTEGER,
    error: DataTypes.STRING,
    project_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    expires_at: DataTypes.DATE,
    executed: DataTypes.BOOLEAN,
    original_file_address: DataTypes.STRING,
    redacted_file_address: DataTypes.STRING,
    executed_rule_ids: DataTypes.STRING,
    executed_rule_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    file_versions: DataTypes.STRING,
    md5_versions: DataTypes.STRING,
    artifact_name_versions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artifact',
  });
  return Artifact;
};