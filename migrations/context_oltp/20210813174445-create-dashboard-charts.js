'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dashboard_charts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      layout: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      vizState: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dashboard_charts');
  }
};