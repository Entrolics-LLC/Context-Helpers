'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      artifact_id: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
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
    await queryInterface.dropTable('ratings');
  }
};