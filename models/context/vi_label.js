'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vi_label extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vi_label.init({
    time_stamp: DataTypes.DATE,
    file_name: DataTypes.STRING,
    description: DataTypes.STRING,
    start_time: DataTypes.INTEGER,
    end_time: DataTypes.INTEGER,
    confidence: DataTypes.FLOAT,
    input_uri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vi_label',
    schema: 'context',
    createdAt: false,
    updatedAt: false
  });
  return vi_label;
};