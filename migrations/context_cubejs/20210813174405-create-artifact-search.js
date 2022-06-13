'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ArtifactSearches', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
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
        type: Sequelize.DATE,
        allowNull: false
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

      folder_id: {
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      },
      details: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ArtifactSearches');
  }
};