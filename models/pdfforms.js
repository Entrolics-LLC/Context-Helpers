'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PdfForms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PdfForms.init({
    id: DataTypes.STRING,
    agency_id: DataTypes.STRING,
    form_name: DataTypes.STRING,
    form_short_name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    created_by: DataTypes.STRING,
    updated_at: DataTypes.DATE,
    updated_by: DataTypes.STRING,
    api_url: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PdfForms',
  });
  return PdfForms;
};