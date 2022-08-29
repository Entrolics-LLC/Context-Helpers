'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('artifact_null_fields', {
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
        type: Sequelize.ARRAY(Sequelize.STRING(4000))
      },
      missing_fields: {
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('artifact_null_fields');
  }
};