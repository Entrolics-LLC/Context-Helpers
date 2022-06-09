'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agencies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agencies.init({
    id: DataTypes.STRING,
    agency_name: DataTypes.STRING,
    agency_acronym: DataTypes.STRING,
    created_at: DataTypes.DATE,
    created_by: DataTypes.STRING,
    updated_at: DataTypes.DATE,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agencies',
  });
  return Agencies;
};