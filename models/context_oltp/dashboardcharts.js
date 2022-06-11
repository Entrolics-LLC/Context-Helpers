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
  };
  DashboardCharts.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
    layout: DataTypes.STRING,
    name: DataTypes.STRING,
    vizState: DataTypes.STRING,
    userId: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'dashboard_charts',
  });
  return DashboardCharts;
};