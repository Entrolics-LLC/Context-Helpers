'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('speech_to_texts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time_stamp: {
        type: Sequelize.DATE
      },
      file_name: {
        type: Sequelize.STRING
      },
      transcript: {
        type: Sequelize.STRING
      },
      confidence: {
        type: Sequelize.STRING
      },
      words: {
        type: Sequelize.STRING
      },
      original_file_name: {
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
    await queryInterface.dropTable('speech_to_texts');
  }
};