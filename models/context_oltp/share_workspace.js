'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class share_workspace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  share_workspace.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    workspace_id: DataTypes.STRING,
    share_id: DataTypes.STRING,
    share_with_type: DataTypes.STRING,
    shared_by_user_id: DataTypes.STRING,
    write_access: DataTypes.INTEGER,
    created_at:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'share_workspace',
  });
  return share_workspace;
};