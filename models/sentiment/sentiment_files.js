'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SentimentFiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SentimentFiles.init(
    {
      file_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      file_original_name: DataTypes.STRING,
      file_address: DataTypes.STRING,
      overall_pos: DataTypes.INTEGER,
      overall_neg: DataTypes.INTEGER,
      overall_neu: DataTypes.INTEGER,
      created_at: {
        type: DataTypes.DATE
      },
      updated_at: {
        type: DataTypes.DATE
      },
      is_deleted: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'sentiment_files',
      schema: 'sentiment',
      createdAt: false,
      updatedAt: false
    });
  return SentimentFiles;
};