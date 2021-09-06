// Controller Imports
const menuitemController = require("../controllers").menuitem;

module.exports = (app) => {
  // Get all menu items with their restaurant
  app.get("/menuitems", menuitemController.getAllMenuitems);
};