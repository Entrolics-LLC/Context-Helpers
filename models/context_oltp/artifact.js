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
  };
  Artifact.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
    artifact_name: DataTypes.STRING,
    organization_id: DataTypes.STRING,
    artifact_description: DataTypes.STRING,
    summary_text: DataTypes.STRING,
    modified_by: DataTypes.STRING,
    user_id: DataTypes.STRING,
    artifact_type: DataTypes.STRING,
    status_id: DataTypes.STRING,
    file_address: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      allowNull: false
    },
    original_artifact_name: DataTypes.STRING,
    artifact_size: DataTypes.STRING,
    form_id: DataTypes.INTEGER,
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
    schedule_id: DataTypes.STRING,
    importing_operation_name: DataTypes.STRING,
    importing_status: DataTypes.STRING,
    numberOfAttempts: DataTypes.INTEGER,
    error: DataTypes.STRING,
    project_id: DataTypes.STRING,
    expires_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'artifact',
  });
  return Artifact;
};