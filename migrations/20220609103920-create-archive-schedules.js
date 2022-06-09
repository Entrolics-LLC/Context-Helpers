'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ArchiveSchedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      web: {
        type: Sequelize.STRING
      },
      schedule: {
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      scheduler_name: {
        type: Sequelize.STRING
      },
      deleted: {
        type: Sequelize.BOOLEAN
      },
      user_id: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      web_description: {
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
    await queryInterface.dropTable('ArchiveSchedules');
  }
};