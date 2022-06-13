'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('share_workspaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
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
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('share_workspaces');
  }
};