'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EntitySentiment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EntitySentiment.init(
    {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    file_name: DataTypes.STRING,
    sentence_no: DataTypes.INTEGER,
    entity:DataTypes.STRING,
    magnitude: DataTypes.FLOAT,
    score: DataTypes.FLOAT
  },
   {
    sequelize,
    modelName: 'entity_sentiments',
    schema: 'sentiment',
    createdAt: false,
    updatedAt: false
  });
  return EntitySentiment;
};