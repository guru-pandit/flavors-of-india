// Controller Imports
const reviewController = require("../controllers").review;

module.exports = (app) => {
    // Add new review
    app.post("/addReview", reviewController.addReview);
    // Get all reviews for the restauraunt
    app.get("/reviews/:restaurantId", reviewController.getRestaurantReviews);
};
