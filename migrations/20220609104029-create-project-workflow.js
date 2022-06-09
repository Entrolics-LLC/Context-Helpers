'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectWorkflows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      business_function_id: {
        type: Sequelize.STRING
      },
      flow_name: {
        type: Sequelize.STRING
      },
      flow_json: {
        type: Sequelize.STRING
      },
      flow_description: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      gflow_id: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('ProjectWorkflows');
  }
};