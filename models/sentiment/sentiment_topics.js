'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SentimentTopic extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    SentimentTopic.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            file_name: DataTypes.STRING,
            topic: DataTypes.STRING,
            confidence: DataTypes.FLOAT,
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            },
            is_deleted: DataTypes.BOOLEAN
        },
        {
            sequelize,
            modelName: 'sentiment_topics',
            schema: 'sentiment',
            createdAt: false,
            updatedAt: false
        });
    return SentimentTopic;
};