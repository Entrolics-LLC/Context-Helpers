'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bigQueryML', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      modelName: {
        type: Sequelize.STRING
      },
      modelType: {
        type: Sequelize.STRING
      },
      columnNames: {
        type: Sequelize.STRING
      },
      options: {
        type: Sequelize.STRING
      },
      is_evaluated: {
        type: Sequelize.BOOLEAN
      },
      is_predicted: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        type: Sequelize.DATE
      },
      table_id: {
        type: Sequelize.STRING
      },
      where_clause: {
        type: Sequelize.STRING
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BigQueryML');
  }
};