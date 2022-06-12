'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookmarks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bookmarks.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    artifact_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'bookmarks',
  });
  return bookmarks;
};