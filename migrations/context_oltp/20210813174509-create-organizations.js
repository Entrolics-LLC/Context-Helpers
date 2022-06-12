'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('organizations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      org_name: {
        type: Sequelize.STRING
      },
      org_description: {
        type: Sequelize.STRING
      },
      parent_org_id: {
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
    await queryInterface.dropTable('organizations');
  }
};