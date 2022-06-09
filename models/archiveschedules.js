'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArchiveSchedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArchiveSchedules.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    web: DataTypes.STRING,
    schedule: DataTypes.STRING,
    project_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    created_at: DataTypes.DATE,
    scheduler_name: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING,
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    web_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ArchiveSchedules',
  });
  return ArchiveSchedules;
};