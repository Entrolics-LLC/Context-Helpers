'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vi_explicit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vi_explicit.init({
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    explicit_content: DataTypes.STRING,
    frame_time: DataTypes.INTEGER,
    input_uri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vi_explicit',
  });
  return vi_explicit;
};