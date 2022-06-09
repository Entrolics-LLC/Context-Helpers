'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedGraphs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SavedGraphs.init({
    id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
    modified_by: DataTypes.STRING,
    description: DataTypes.STRING,
    query_array: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SavedGraphs',
  });
  return SavedGraphs;
};