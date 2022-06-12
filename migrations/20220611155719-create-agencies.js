'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
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
    await queryInterface.dropTable('agencies');
  }
};