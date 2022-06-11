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
  };
  PdfForms.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
    agency_id: DataTypes.STRING,
    form_name: DataTypes.STRING,
    form_short_name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      allowNull: false
    },
    created_by: DataTypes.STRING,
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      allowNull: false
    },
    updated_by: DataTypes.STRING,
    api_url: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pdf_forms',
  });
  return PdfForms;
};