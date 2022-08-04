'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_logo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  image_logo.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    description: DataTypes.STRING,
    score: DataTypes.FLOAT,
    input_uri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image_logo',
  });
  return image_logo;
};