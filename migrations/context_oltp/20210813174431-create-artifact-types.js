'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('artifact_types', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      artifact_type_name: {
        type: Sequelize.STRING
      },
      artifact_type_description: {
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
    await queryInterface.dropTable('artifact_types');
  }
};