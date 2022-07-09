'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PdfPages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PdfPages.init({
    file_name: DataTypes.STRING,
    dimensions: DataTypes.STRING,
    pageNumber: DataTypes.INTEGER,
    paragraphs: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pdf_pages',
    schema: 'context'
  });
  return PdfPages;
};