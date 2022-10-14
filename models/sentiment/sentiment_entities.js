'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SentimentEntity extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    SentimentEntity.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            file_id: DataTypes.STRING,
            file_name: DataTypes.STRING,
            entity: DataTypes.STRING,
            magnitude: DataTypes.FLOAT,
            salience:DataTypes.FLOAT,
            entity_type:DataTypes.STRING,
            score: DataTypes.FLOAT,
            created_at: {
                type: DataTypes.DATE
            },
        },
        {
            sequelize,
            modelName: 'sentiment_entities',
            schema: 'sentiment',
            createdAt: false,
            updatedAt: false
        });
    return SentimentEntity;
};