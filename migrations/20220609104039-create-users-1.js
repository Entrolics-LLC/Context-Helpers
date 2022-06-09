'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users1s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      middle_initial: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      job_title: {
        type: Sequelize.STRING
      },
      notification: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      user_interest_id: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      status_id: {
        type: Sequelize.STRING
      },
      role_id: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      auth_type: {
        type: Sequelize.STRING
      },
      social_id: {
        type: Sequelize.STRING
      },
      is_email_verified: {
        type: Sequelize.INTEGER
      },
      phone_number: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Users1s');
  }
};