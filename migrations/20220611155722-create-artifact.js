'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('artifacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      artifact_name: {
        type: Sequelize.STRING
      },
      organization_id: {
        type: Sequelize.STRING
      },
      artifact_description: {
        type: Sequelize.STRING
      },
      summary_text: {
        type: Sequelize.STRING
      },
      modified_by: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      artifact_type: {
        type: Sequelize.STRING
      },
      status_id: {
        type: Sequelize.STRING
      },
      file_address: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      original_artifact_name: {
        type: Sequelize.STRING
      },
      artifact_size: {
        type: Sequelize.STRING
      },
      form_id: {
        type: Sequelize.INTEGER
      },
      file_type: {
        type: Sequelize.STRING
      },
      form_name: {
        type: Sequelize.STRING
      },
      is_validate: {
        type: Sequelize.BOOLEAN
      },
      md5: {
        type: Sequelize.STRING
      },
      is_deleted: {
        type: Sequelize.BOOLEAN
      },
      is_template: {
        type: Sequelize.BOOLEAN
      },
      template_name: {
        type: Sequelize.STRING
      },
      is_verified: {
        type: Sequelize.BOOLEAN
      },
      is_completed: {
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.STRING
      },
      training_operation_name: {
        type: Sequelize.STRING
      },
      dataset_csv: {
        type: Sequelize.STRING
      },
      dataset_directory_path: {
        type: Sequelize.STRING
      },
      training_status: {
        type: Sequelize.STRING
      },
      schedule_id: {
        type: Sequelize.STRING
      },
      importing_operation_name: {
        type: Sequelize.STRING
      },
      importing_status: {
        type: Sequelize.STRING
      },
      numberOfAttempts: {
        type: Sequelize.INTEGER
      },
      error: {
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      },
      expires_at: {
        type: Sequelize.DATE
      },
      executed: {
        type: Sequelize.BOOLEAN
      },
      original_file_address: {
        type: Sequelize.STRING
      },
      redacted_file_address: {
        type: Sequelize.STRING
      },
      executed_rule_ids: {
        type: Sequelize.STRING
      },
      executed_rule_id: {
        type: Sequelize.STRING
      },
      file_versions: {
        type: Sequelize.STRING
      },
      md5_versions: {
        type: Sequelize.STRING
      },
      artifact_name_versions: {
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
    await queryInterface.dropTable('artifacts');
  }
};