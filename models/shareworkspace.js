'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShareWorkspace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShareWorkspace.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    workspace_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    share_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    share_with_type: DataTypes.STRING,
    shared_by_user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    write_access: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ShareWorkspace',
  });
  return ShareWorkspace;
};