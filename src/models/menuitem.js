'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menuitem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Restaurant }) {
      Menuitem.belongsToMany(Restaurant, {
        through: "RestaurantMenuitem",
      });
    }
  };
  Menuitem.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    restaurantId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Menuitem',
  });
  return Menuitem;
};