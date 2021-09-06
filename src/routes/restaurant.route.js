// Controller Imports
const restaurantController = require("../controllers").restaurant;

module.exports = (app) => {
  let router = require("express").Router();

  

  app.use("/api", router);
};