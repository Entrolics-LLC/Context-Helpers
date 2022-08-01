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
        type: Sequelize.FLOAT
      },
      web: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      links: {
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('web_archives');
  }
};