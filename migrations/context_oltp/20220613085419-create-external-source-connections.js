'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('external_source_connections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      source_name: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      source_email: {
        type: Sequelize.STRING
      },
      configurations: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      box_user_id: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('external_source_connections');
  }
};