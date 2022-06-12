'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class keyword_notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  keyword_notification.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    project_id: DataTypes.STRING,
    keyword: DataTypes.STRING,
    keyword_id: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    file_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'keyword_notification',
  });
  return keyword_notification;
};