'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ai_video_data', {
      original_artifact_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      file_name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      file_type: {
        type: Sequelize.STRING
      },
      label_file_name: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.JSONB
      },
      logo_file_name: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.JSONB
      },
      transcript_file_name: {
        type: Sequelize.STRING
      },
      transcript: {
        type: Sequelize.JSONB
      },
      ec_file_name: {
        type: Sequelize.STRING
      },
      explicit_content: {
        type: Sequelize.JSONB
      },
      text_file_name: {
        type: Sequelize.STRING
      },
      text_detection: {
        type: Sequelize.JSONB
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ai_video_data');
  }
};