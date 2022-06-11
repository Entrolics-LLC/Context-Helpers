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
  };
  FlowSchedule.init({
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
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      allowNull: false
    },
    schedule_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'flow_schedule',
  });
  return FlowSchedule;
};