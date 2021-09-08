// Controller Imports
const mealtypeController = require("../controllers").mealtype;

module.exports = (app) => {
    // Create new meal type
    app.post("/createMealtype/:restaurantId", mealtypeController.createMealtype);
    // Get all meal types with their restaurants
    app.get("/mealtypes", mealtypeController.getAllMealtypes);
    // Get all meal types of the restaurant
    app.get("/mealtypes/:restaurantId", mealtypeController.getMealtypesByRestaurant);
    // Get all restaurants of the mealtype
    app.get("/restuarantsByMeal/:mealtypeId", mealtypeController.getRestaurantsByMealtype);
};