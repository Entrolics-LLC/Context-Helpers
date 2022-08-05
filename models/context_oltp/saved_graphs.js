'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class saved_graphs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  saved_graphs.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modified_at: DataTypes.DATE,
    modified_by: DataTypes.STRING,
    description: DataTypes.STRING,
    query_array: DataTypes.ARRAY('VARCHAR(3000)'),
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'saved_graphs',
    createdAt: false,
    updatedAt: false
  });
  return saved_graphs;
};