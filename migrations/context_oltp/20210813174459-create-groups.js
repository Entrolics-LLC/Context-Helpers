'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      group_name: {
        type: Sequelize.STRING
      },
      group_description: {
        type: Sequelize.STRING
      },
      parent_group_id: {
        type: Sequelize.STRING
      },
      organization_id: {
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
    await queryInterface.dropTable('groups');
  }
};