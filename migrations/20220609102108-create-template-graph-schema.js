'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TemplateGraphSchemas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      template_id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      source_name: {
        type: Sequelize.STRING
      },
      target_name: {
        type: Sequelize.STRING
      },
      source_id: {
        type: Sequelize.STRING
      },
      target_id: {
        type: Sequelize.STRING
      },
      relation: {
        type: Sequelize.STRING
      },
      id: {
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
    await queryInterface.dropTable('TemplateGraphSchemas');
  }
};