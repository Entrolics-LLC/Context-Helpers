'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('templates', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      template_name: {
        type: Sequelize.STRING
      },
      file_address: {
        type: Sequelize.STRING
      },
      is_custom: {
        type: Sequelize.BOOLEAN
      },
      is_ready: {
        type: Sequelize.BOOLEAN
      },
      processor_id: {
        type: Sequelize.STRING
      },
      custom_endpoint: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING
      },
      visibility: {
        type: Sequelize.STRING
      },
      shared_with: {
        type: Sequelize.STRING
      },
      shared_with_users: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('templates');
  }
};