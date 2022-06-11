'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_explicit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  image_explicit.init({
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    adult: DataTypes.STRING,
    spoof: DataTypes.STRING,
    medical: DataTypes.STRING,
    violence: DataTypes.STRING,
    racy: DataTypes.STRING,
    input_uri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image_explicit',
  });
  return image_explicit;
};