'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('status', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      status_name: {
        type: Sequelize.STRING
      },
      status_type: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('status');
  }
};