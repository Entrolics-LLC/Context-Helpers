'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArchivedWebpages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArchivedWebpages.init({
    id: DataTypes.STRING,
    archive_id: DataTypes.STRING,
    gcs_url: DataTypes.STRING,
    web_url: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ArchivedWebpages',
  });
  return ArchivedWebpages;
};