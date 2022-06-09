'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WebArchives extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WebArchives.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    timestamp: DataTypes.INTEGER,
    web: DataTypes.STRING,
    created_at: DataTypes.DATE,
    links: DataTypes.STRING,
    project_id: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'WebArchives',
  });
  return WebArchives;
};