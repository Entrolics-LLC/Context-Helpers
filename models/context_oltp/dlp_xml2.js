'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dlp_xml2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dlp_xml2.init({
    file_id: DataTypes.STRING,
    value: DataTypes.STRING,
    type: DataTypes.STRING,
    likelihood: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dlp_xml2',
    createdAt: false,
    updatedAt: false
  });
  return dlp_xml2;
};