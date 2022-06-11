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
  };
  Agencies.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
    agency_name: DataTypes.STRING,
    agency_acronym: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      allowNull: false
    },
    created_by: DataTypes.STRING,
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'agencies',
  });
  return Agencies;
};