// Controller Imports
const userController = require("../controllers").user;
const { body } = require("express-validator");
module.exports = (app) => {
   app.post(
    "/register",userController.createUser
  );
  app.post(
    "/login", userController.loginUser
  );
  app.get("/user/:id", userController.getUsersById);
  app.delete("/deleteUser/:id", userController.deleteUser);

};

