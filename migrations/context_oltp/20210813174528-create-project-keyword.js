'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('project_keyword', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      condition: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      keyword: {
        type: Sequelize.STRING
      },
      file_type: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project_keyword');
  }
};