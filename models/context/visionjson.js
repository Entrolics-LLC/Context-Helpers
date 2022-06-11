'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VisionJson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  VisionJson.init({
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    vision_json: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VisionJson',
  });
  return VisionJson;
};