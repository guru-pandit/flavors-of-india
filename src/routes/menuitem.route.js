// Controller Imports
const menuitemController = require("../controllers").menuitem;

module.exports = (app) => {
  let router = require("express").Router();

  app.use("/api", router);
};