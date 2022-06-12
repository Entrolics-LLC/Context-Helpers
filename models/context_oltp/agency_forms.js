'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class agency_forms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  agency_forms.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    agency_id: DataTypes.STRING,
    form_name: DataTypes.STRING,
    form_short_name: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_by: DataTypes.STRING,
    api_url: DataTypes.STRING,
    image_url: DataTypes.STRING,
    created_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'agency_forms',
  });
  return agency_forms;
};