'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class speech_to_text extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  speech_to_text.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    transcript: DataTypes.STRING,
    confidence: DataTypes.STRING,
    words: DataTypes.STRING,
    original_file_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'speech_to_text',
  });
  return speech_to_text;
};