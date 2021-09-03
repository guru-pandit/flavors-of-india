'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Location, Mealtype, Menuitem }) {
      Restaurant.belongsTo(Location, {
        foreignKey: "locationId"
      });
      Restaurant.belongsToMany(Mealtype, {
        through: "RestaurantMealtype",
      });
      Restaurant.belongsToMany(Menuitem, {
        through: "RestaurantMenuitem",
      });
    }
  };
  Restaurant.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};