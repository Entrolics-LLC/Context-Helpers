'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('template_graph_schema', {
      template_id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      source_name: {
        type: Sequelize.STRING
      },
      target_name: {
        type: Sequelize.STRING
      },
      source_id: {
        type: Sequelize.STRING
      },
      target_id: {
        type: Sequelize.STRING
      },
      relation: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('template_graph_schema');
  }
};