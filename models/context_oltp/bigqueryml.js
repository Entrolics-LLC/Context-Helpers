'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BigQueryML extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BigQueryML.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
    user_id: DataTypes.STRING,
    modelName: DataTypes.STRING,
    modelType: DataTypes.STRING,
    columnNames: DataTypes.STRING,
    options: DataTypes.STRING,
    is_evaluated: DataTypes.BOOLEAN,
    is_predicted: DataTypes.BOOLEAN,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      allowNull: false
    },
    table_id: DataTypes.STRING,
    where_clause: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bigQueryML',
  });
  return BigQueryML;
};