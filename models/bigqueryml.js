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
  }
  BigQueryML.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    modelName: DataTypes.STRING,
    modelType: DataTypes.STRING,
    columnNames: DataTypes.STRING,
    options: DataTypes.STRING,
    is_evaluated: DataTypes.BOOLEAN,
    is_predicted: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    table_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    where_clause: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BigQueryML',
  });
  return BigQueryML;
};