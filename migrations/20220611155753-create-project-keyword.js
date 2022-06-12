'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('project_keywords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      project_id: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      condition: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      keyword: {
        type: Sequelize.STRING
      },
      file_type: {
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
    await queryInterface.dropTable('project_keywords');
  }
};