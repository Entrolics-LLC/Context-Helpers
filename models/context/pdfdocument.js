'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PdfDocument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PdfDocument.init({
    file_name: DataTypes.STRING,
    pages_count: DataTypes.INTEGER,
    entities_count: DataTypes.INTEGER,
    text: DataTypes.STRING,
    schema_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pdf_document',
  });
  return PdfDocument;
};