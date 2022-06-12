'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('workspace_chat', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      workspace_id: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('workspace_chat');
  }
};