'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class agencies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  agencies.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    agency_name: DataTypes.STRING,
    agency_acronym: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    created_by: DataTypes.STRING,
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'agencies',
  });
  return agencies;
};