// Controller Imports
const restaurantController = require("../controllers").restaurant;

module.exports = (app) => {
    //to get restaurants by location
    app.get("/getrestaurantsbylocation/:locationId", restaurantController.getRestaurantsByLocation);
    //to get restaurant details by its id
    app.get("/getrestaurantdetailsbyid/:restaurantId", restaurantController.getRestaurantDetailsById);
    //to filter restaurants
    app.post("/filterrestaurants", restaurantController.filterRestaurants);
    //to add new restaurant
    app.post("/addnewrestaurant", restaurantController.addNewRestaurant);
};