'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      role_name: {
        type: Sequelize.STRING
      },
      home_access: {
        type: Sequelize.INTEGER
      },
      data_access: {
        type: Sequelize.INTEGER
      },
      admin_access: {
        type: Sequelize.INTEGER
      },
      report_access: {
        type: Sequelize.INTEGER
      },
      upload_access: {
        type: Sequelize.INTEGER
      },
      doc_approval_access: {
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
    await queryInterface.dropTable('roles');
  }
};