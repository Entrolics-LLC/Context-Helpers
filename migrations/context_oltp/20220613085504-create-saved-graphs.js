'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('saved_graphs', {
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
      name: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      modified_at: {
        type: Sequelize.DATE
      },
      modified_by: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      query_array: {
        type: Sequelize.ARRAY(Sequelize.STRING(4000))
      },
      image: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('saved_graphs');
  }
};