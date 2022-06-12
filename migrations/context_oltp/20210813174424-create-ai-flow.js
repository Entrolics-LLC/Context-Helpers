'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ai_flow', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      flow_name: {
        type: Sequelize.STRING
      },
      flow_owner: {
        type: Sequelize.STRING
      },
      flow_json: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ai_flow');
  }
};