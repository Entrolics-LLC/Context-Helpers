'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class archive_schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  archive_schedules.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    web: DataTypes.STRING,
    schedule: DataTypes.STRING,
    project_id: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    scheduler_name: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    user_id: DataTypes.STRING,
    description: DataTypes.STRING,
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    web_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'archive_schedules',
    createdAt: false,
    updatedAt: false
  });
  return archive_schedules;
};