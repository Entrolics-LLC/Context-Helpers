'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('archived_webpages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      archive_id: {
        type: Sequelize.STRING
      },
      gcs_url: {
        type: Sequelize.STRING
      },
      web_url: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('archived_webpages');
  }
};