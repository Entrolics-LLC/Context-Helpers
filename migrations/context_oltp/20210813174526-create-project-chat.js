'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('project_chat', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project_chat');
  }
};