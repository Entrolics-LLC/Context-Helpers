'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FlowSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FlowSchedule.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    flow_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    schedule_name: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    execution_time: DataTypes.STRING,
    cron_schedule: DataTypes.STRING,
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    updated_by_user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    schedule_id: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'FlowSchedule',
  });
  return FlowSchedule;
};