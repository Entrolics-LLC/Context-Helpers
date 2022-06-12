'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('keyword_notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      },
      keyword: {
        type: Sequelize.STRING
      },
      keyword_id: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      file_name: {
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
    await queryInterface.dropTable('keyword_notifications');
  }
};