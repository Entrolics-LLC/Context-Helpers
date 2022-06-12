'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('saved_graphs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      modified_at: {
        type: Sequelize.DATE
      },
      modified_by: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      query_array: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('saved_graphs');
  }
};