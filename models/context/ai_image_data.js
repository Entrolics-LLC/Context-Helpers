'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ai_image_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ai_image_data.init({
    file_name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    file_address: DataTypes.STRING,
    label: DataTypes.JSONB,
    explicit_content: DataTypes.JSONB,
    landmark: DataTypes.JSONB,
    logo: DataTypes.JSONB,
    matches: DataTypes.JSONB,
    artifact_id: DataTypes.STRING,
    artifact_name: DataTypes.STRING,
    original_artifact_name: DataTypes.STRING,
    user_id: DataTypes.STRING,
    artifact_description: DataTypes.STRING,
    email: DataTypes.STRING,
    status_name: DataTypes.STRING,
    org_name: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ai_image_data',
    schema: 'context',
    createdAt: false,
    updatedAt: false
  });
  return ai_image_data;
};