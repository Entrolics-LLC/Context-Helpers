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
  };
  speech_to_text.init({
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    sph_to_txt_link: DataTypes.STRING,
    transcript_confidence: DataTypes.STRING,
    classification_name: DataTypes.STRING,
    classification_confidence: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'speech_to_txts',
    schema: 'context',
    createdAt: false,
    updatedAt: false
  });
  return speech_to_text;
};