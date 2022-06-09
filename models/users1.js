'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users1.init({
    id: DataTypes.STRING,
    first_name: DataTypes.STRING,
    middle_initial: DataTypes.STRING,
    last_name: DataTypes.STRING,
    job_title: DataTypes.STRING,
    notification: DataTypes.INTEGER,
    address: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    city: DataTypes.STRING,
    email: DataTypes.STRING,
    user_interest_id: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    status_id: DataTypes.STRING,
    role_id: DataTypes.STRING,
    password: DataTypes.STRING,
    auth_type: DataTypes.STRING,
    social_id: DataTypes.STRING,
    is_email_verified: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users1',
  });
  return Users1;
};