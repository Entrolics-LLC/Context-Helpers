'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test - table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Test - table.init({
    id: DataTypes.INTEGER,
    agency_id: DataTypes.INTEGER,
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
    modelName: 'Test-table',
  });
  return Test - table;
};