'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('agencies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      agency_name: {
        type: Sequelize.STRING
      },
      agency_acronym: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.STRING
      },
      updated_at: {
        type: Sequelize.DATE
      },
      updated_by: {
        type: Sequelize.STRING
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('agencies');
  }
};