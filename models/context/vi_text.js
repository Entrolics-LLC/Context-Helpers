'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vi_text extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vi_text.init({
    file_name: DataTypes.STRING,
    time_stamp: DataTypes.DATE,
    text_annotations: DataTypes.JSON,
    segment: DataTypes.JSON,
    input_uri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vi_text',
  });
  return vi_text;
};