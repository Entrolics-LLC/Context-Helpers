'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_landmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  image_landmark.init({
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    description: DataTypes.STRING,
    score: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    input_uri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image_landmark',
    schema: 'context'
  });
  return image_landmark;
};