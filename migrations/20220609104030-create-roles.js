'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
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
    await queryInterface.dropTable('Roles');
  }
};