'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('workflow_rules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      route: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      created_at: {
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
    await queryInterface.dropTable('workflow_rules');
  }
};