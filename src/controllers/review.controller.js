const Review = require("../models").Review;
const Restaurant = require("../models").Restaurant;

// Method to add review
const addReview = async (req, res) => {
    try {
        let reviewBody = {
            comment: req.body.comment,
            stars: req.body.stars,
            commentedAt: new Date(),
            restaurantId: req.body.restaurantId,
        }

        let review = await Review.create(reviewBody);
        return res.status(200).json({ message: "Menu item created", review });

    } catch (err) {
        res.status(500).json({ error: err.message || "Something went wrong" })
    }
}

// Method to get reviews of restaurant
const getRestaurantReviews = async (req, res) => {
    try {
        let { restaurantId } = req.params;
        let restaurant = await Restaurant.findOne({
            where: { id: restaurantId },
            include: [
                {
                    model: Review,
                }
            ]
        });
        // console.log(restaurant);
        if (restaurant == null) {
            return res.status(400).json({ error: "Restaurant not found" });
        } else {
            return res.status(200).json(restaurant);
        }

    } catch (err) {
        res.status(500).json({ error: err.message || "Something went wrong" })
    }
}

module.exports = { addReview, getRestaurantReviews }