'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flow_schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  flow_schedule.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    flow_id: DataTypes.STRING,
    schedule_name: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    execution_time: DataTypes.STRING,
    cron_schedule: DataTypes.STRING,
    user_id: DataTypes.STRING,
    updated_by_user_id: DataTypes.STRING,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    schedule_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'flow_schedule',
  });
  return flow_schedule;
};