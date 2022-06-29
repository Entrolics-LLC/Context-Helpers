'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ai_explicit_content', {
      artifact_name: {
        type: Sequelize.STRING
      },
      explicit_content: {
        type: Sequelize.INTEGER
      },
      product: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ai_explicit_content');
  }
};