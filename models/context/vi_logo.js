'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vi_logo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vi_logo.init({
    file_name: DataTypes.STRING,
    time_stamp: DataTypes.DATE,
    logo_recognition_annotations: DataTypes.JSON,
    segment: DataTypes.JSON,
    input_uri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vi_logo',
    schema: 'context',
    createdAt: false,
    updatedAt: false
  });
  return vi_logo;
};