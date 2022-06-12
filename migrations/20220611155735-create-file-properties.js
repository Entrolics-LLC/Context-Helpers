'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('file_properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      file_id: {
        type: Sequelize.STRING
      },
      additional_property_id: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      property_value: {
        type: Sequelize.STRING
      },
      project_id: {
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
    await queryInterface.dropTable('file_properties');
  }
};