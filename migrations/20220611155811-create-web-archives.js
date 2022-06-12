'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('web_archives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.INTEGER
      },
      web: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      links: {
        type: Sequelize.STRING
      },
      project_id: {
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
    await queryInterface.dropTable('web_archives');
  }
};