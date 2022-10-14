'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sentiment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sentiment.init(
    {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    file_name: DataTypes.STRING,
    sentence: DataTypes.STRING(1000),
    start_index:DataTypes.INTEGER,
    last_index:DataTypes.INTEGER,
    score: DataTypes.FLOAT,
    magnitude: DataTypes.FLOAT,
    entities:DataTypes.ARRAY(DataTypes.STRING),
    file_id: DataTypes.STRING
  },
   {
    sequelize,
    modelName: 'sentiments',
    schema: 'sentiment',
    createdAt: false,
    updatedAt: false
  });
  return Sentiment;
};