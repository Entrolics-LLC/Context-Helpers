'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vi_transcript extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vi_transcript.init({
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    input_uri: DataTypes.STRING,
    transcript: DataTypes.STRING,
    confidence: DataTypes.STRING,
    word: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'vi_transcript',
    schema: 'context'
  });
  return vi_transcript;
};