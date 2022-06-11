'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_web_entities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  image_web_entities.init({
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    matching_images: DataTypes.STRING,
    pages_with_images: DataTypes.STRING,
    best_guess: DataTypes.STRING,
    input_uri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image_web_entities',
  });
  return image_web_entities;
};