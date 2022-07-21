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
  }
  PdfDocument.init({
    file_name: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    pages_count: DataTypes.INTEGER,
    entities_count: DataTypes.INTEGER,
    text: 'CHARACTER VARYING(1000000)',
    schema_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pdf_document',
    schema: 'context',
    createdAt: false,
    updatedAt: false
  });
  return PdfDocument;
};