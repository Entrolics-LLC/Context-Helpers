'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ArtifactSearches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      file_name: {
        type: Sequelize.STRING
      },
      artifact_type: {
        type: Sequelize.STRING
      },
      artifact_extension: {
        type: Sequelize.STRING
      },
      original_artifact_name: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      artifact_size: {
        type: Sequelize.STRING
      },
      file_address: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING
      },
      folder_id: {
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      },
      details: {
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
    await queryInterface.dropTable('ArtifactSearches');
  }
};