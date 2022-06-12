'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('keyword_notification', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      },
      keyword: {
        type: Sequelize.STRING
      },
      keyword_id: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('keyword_notification');
  }
};