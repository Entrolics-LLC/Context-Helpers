'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('audits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      action: {
        type: Sequelize.STRING
      },
      action_type: {
        type: Sequelize.STRING
      },
      action_table: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('audits');
  }
};