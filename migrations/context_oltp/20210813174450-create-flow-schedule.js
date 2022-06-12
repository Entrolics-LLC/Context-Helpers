'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('flow_schedule', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      flow_id: {
        type: Sequelize.STRING
      },
      schedule_name: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.STRING
      },
      end_date: {
        type: Sequelize.STRING
      },
      execution_time: {
        type: Sequelize.STRING
      },
      cron_schedule: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      updated_by_user_id: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      schedule_id: {
        type: Sequelize.STRING
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('flow_schedule');
  }
};