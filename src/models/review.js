'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Restaurant }) {
      Review.belongsTo(Restaurant, {
        foreignKey: "restaurantId",
      });
    }
  };
  Review.init({
    comment: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    commentedAt: DataTypes.DATE,
    restaurantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};