'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgencyForms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AgencyForms.init({
    id: DataTypes.STRING,
    agency_id: DataTypes.STRING,
    form_name: DataTypes.STRING,
    form_short_name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    updated_by: DataTypes.STRING,
    api_url: DataTypes.STRING,
    image_url: DataTypes.STRING,
    created_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AgencyForms',
  });
  return AgencyForms;
};