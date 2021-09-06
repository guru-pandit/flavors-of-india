// Controller Imports
const userController = require("../controllers").user;

module.exports = (app) => {
  let router = require("express").Router();

  

  app.use("/api", router);
};
