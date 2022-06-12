'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flow_schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flow_schedules');
  }
};