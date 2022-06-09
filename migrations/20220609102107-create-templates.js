'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Templates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
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
      },
      is_deleted: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Templates');
  }
};