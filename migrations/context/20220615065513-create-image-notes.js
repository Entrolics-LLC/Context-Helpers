'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('image_notes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      artifact_id: {
        type: Sequelize.STRING
      },
      x: {
        type: Sequelize.FLOAT
      },
      y: {
        type: Sequelize.FLOAT
      },
      w: {
        type: Sequelize.FLOAT
      },
      h: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('image_notes');
  }
};