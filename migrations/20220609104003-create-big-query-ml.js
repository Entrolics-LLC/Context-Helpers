'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BigQueryMLs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BigQueryMLs');
  }
};