'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
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
      phone_number: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      avatar: {
        type: Sequelize.STRING
      },
      is_email_verified: {
        type: Sequelize.BOOLEAN
      },
      token: {
        type: Sequelize.STRING
      },
      access_token: {
        type: Sequelize.STRING
      },
      role_name: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};