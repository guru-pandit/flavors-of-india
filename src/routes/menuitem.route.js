// Controller Imports
const menuitemController = require("../controllers").menuitem;

module.exports = (app) => {
  // Create new Mneu item
  app.post("/createmenuitem/:restaurantId", menuitemController.createMenuitem);
  // Get all menu items with their restaurants
  app.get("/menuitems", menuitemController.getAllMenuitems);
  // Get all menu items of the restaurant
  app.get("/menuitems/:restaurantId", menuitemController.getMenuitemsByRestaurant);
  // Get all restaurants of the menuitem
  app.get("/restuarants/:menuitemId", menuitemController.getRestaurantsByMenuitem);
};