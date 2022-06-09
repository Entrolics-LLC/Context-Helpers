'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DashboardCharts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DashboardCharts.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    layout: DataTypes.STRING,
    name: DataTypes.STRING,
    vizState: DataTypes.STRING,
    userid: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'DashboardCharts',
  });
  return DashboardCharts;
};