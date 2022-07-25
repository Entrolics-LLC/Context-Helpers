'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ai_video_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ai_video_data.init({
    original_artifact_name: DataTypes.STRING,
    email: DataTypes.STRING,
    user_id: DataTypes.STRING,
    file_name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    file_type: DataTypes.STRING,
    label_file_name: DataTypes.STRING,
    label: DataTypes.JSONB,
    logo_file_name: DataTypes.STRING,
    logo: DataTypes.JSONB,
    transcript_file_name: DataTypes.STRING,
    transcript: DataTypes.JSONB,
    ec_file_name: DataTypes.STRING,
    explicit_content: DataTypes.JSONB,
    text_file_name: DataTypes.STRING,
    text_detection: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'ai_video_data',
    schema: 'context',
    createdAt: false,
    updatedAt: false
  });
  return ai_video_data;
};