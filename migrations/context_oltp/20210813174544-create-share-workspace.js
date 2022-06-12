'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('share_workspace', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      workspace_id: {
        type: Sequelize.STRING
      },
      share_id: {
        type: Sequelize.STRING
      },
      share_with_type: {
        type: Sequelize.STRING
      },
      shared_by_user_id: {
        type: Sequelize.STRING
      },
      write_access: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('share_workspace');
  }
};