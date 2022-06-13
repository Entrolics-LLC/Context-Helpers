'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('project_flow_rules', {
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
      rule_name: {
        type: Sequelize.STRING
      },
      backend_api: {
        type: Sequelize.STRING
      },
      input_type: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      rule_icon: {
        type: Sequelize.STRING
      },
      rule_type: {
        type: Sequelize.STRING
      },
      dropdown_options: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('project_flow_rules');
  }
};