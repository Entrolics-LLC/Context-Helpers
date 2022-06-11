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
  };
  SavedGraphs.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      allowNull: false
    },
    modified_at: DataTypes.DATE,
    modified_by: DataTypes.STRING,
    description: DataTypes.STRING,
    query_array: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'saved_graphs',
  });
  return SavedGraphs;
};