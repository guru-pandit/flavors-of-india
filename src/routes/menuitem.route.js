// Controller Imports
const menuitemController = require("../controllers").menuitem;

module.exports = (app) => {
  // Create new Menu item
  app.post("/createMenuitem/:restaurantId", menuitemController.createMenuitem);
  // Get all menu items with their restaurants
  app.get("/menuitems", menuitemController.getAllMenuitems);
  // Get all menu items of the restaurant
  app.get("/menuitems/:restaurantId", menuitemController.getMenuitemsByRestaurant);
  // Get all restaurants of the menuitem
  app.get("/restuarantsByMenu/:menuitemId", menuitemController.getRestaurantsByMenuitem);
};