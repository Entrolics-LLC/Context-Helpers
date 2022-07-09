'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  image_notes.init({
    artifact_id: DataTypes.STRING,
    x: DataTypes.FLOAT,
    y: DataTypes.FLOAT,
    w: DataTypes.FLOAT,
    h: DataTypes.FLOAT,
    description: DataTypes.STRING,
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image_notes',
    schema: 'context'
  });
  return image_notes;
};