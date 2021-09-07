// Controller Imports
const restaurantController = require("../controllers").restaurant;

module.exports = (app) => {
    //to get restaurants by location
    app.get("/getrestaurantsbylocation/:locationId", restaurantController.getRestaurantsByLocation);
    //to get restaurant details by its id
    app.get("/getrestaurantdetailsbyid/:restaurantId", restaurantController.getRestaurantDetailsById);
};