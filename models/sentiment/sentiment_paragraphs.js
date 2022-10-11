'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SentimentParagraph extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SentimentParagraph.init(
    {
      file_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      file_original_name: DataTypes.STRING,
      file_address: DataTypes.STRING,
      paragraph:DataTypes.STRING(1000000),
      score: DataTypes.FLOAT,
      magnitude: DataTypes.FLOAT,
      topics:DataTypes.ARRAY(DataTypes.STRING),
      topics_confidence:DataTypes.ARRAY(DataTypes.FLOAT),
      additional_fields:DataTypes.JSON,
      notes:DataTypes.STRING(10000),
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
      modelName: 'sentiment_paragraphs',
      schema: 'sentiment',
      createdAt: false,
      updatedAt: false
    });
  return SentimentParagraph;
};