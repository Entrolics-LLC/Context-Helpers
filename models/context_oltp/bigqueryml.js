'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bigQueryML extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bigQueryML.init({
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
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    table_id: DataTypes.STRING,
    where_clause: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bigQueryML',
    createdAt: false,
    updatedAt: false
  });
  return bigQueryML;
};