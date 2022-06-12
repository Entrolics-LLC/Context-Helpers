'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_widgets', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      layout: {
        type: Sequelize.STRING
      },
      properties: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      workspace_id: {
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
    await queryInterface.dropTable('user_widgets');
  }
};