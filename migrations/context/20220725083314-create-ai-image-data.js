'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ai_image_data', {
      file_name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      file_address: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.JSONB
      },
      explicit_content: {
        type: Sequelize.JSONB
      },
      landmark: {
        type: Sequelize.JSONB
      },
      logo: {
        type: Sequelize.JSONB
      },
      matches: {
        type: Sequelize.JSONB
      },
      artifact_id: {
        type: Sequelize.STRING
      },
      artifact_name: {
        type: Sequelize.STRING
      },
      original_artifact_name: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      artifact_description: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      status_name: {
        type: Sequelize.STRING
      },
      org_name: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ai_image_data');
  }
};