'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ArtifactNullFields', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artifact_name: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING
      },
      fields: {
        type: Sequelize.STRING
      },
      missing_fields: {
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
    await queryInterface.dropTable('ArtifactNullFields');
  }
};