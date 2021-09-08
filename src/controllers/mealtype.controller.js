const Mealtype = require("../models").Mealtype;
const Restaurant = require("../models").Restaurant;

// This method create new meal type
const createMealtype = async (req, res) => {
    try {
        let { restaurantId } = req.params;
        let meal = {
            name: req.body.name,
            content: req.body.content,
            image: req.body.image,
            isDeleted: false
        };

        let restaurant = await Restaurant.findOne({ where: { id: restaurantId } });

        if (restaurant == null) {
            return res.status(400).json({ error: "Restaurant not found" });
        } else {
            let mealtype = await Mealtype.create(meal);
            // addMealtype method adds the ids of both restaurant and mealtype in the Junction table
            restaurant.addMealtype(mealtype);
            return res.status(200).json({ message: "Meal type created", mealtype });
        }
    } catch (err) {
        res.status(500).json({ error: err.message || "Something went wrong" });
    }
}

// This method return all meal types with their retaurant
const getAllMealtypes = async (req, res) => {
    try {
        let mealtypes = await Mealtype.findAll({
            include: [
                {
                    model: Restaurant,
                    through: { attributes: [] }
                }
            ]
        });
        res.status(200).json(mealtypes);
    } catch (err) {
        res.status(500).json({ error: err.message || "Something went wrong" });
    }
}

// This method returns all the meal types of specific restaurant
const getMealtypesByRestaurant = async (req, res) => {
    try {
        let { restaurantId } = req.params;
        let restaurant = await Restaurant.findOne({
            where: { id: restaurantId },
            include: [
                {
                    model: Mealtype,
                    through: { attributes: [] }
                }
            ]
        });

        if (restaurant == null) {
            return res.status(400).json({ error: "Restaurant not found" });
        } else {
            return res.status(200).json(restaurant);
        }
    } catch (err) {
        res.status(500).json({ error: err.message || "Something went wrong" });
    }
}

// This method returns all the Restaurants of specific mealtype
const getRestaurantsByMealtype = async (req, res) => {
    try {
        let { mealtypeId } = req.params;
        let mealtype = await Mealtype.findOne({
            where: { id: mealtypeId },
            include: [
                {
                    model: Restaurant,
                    through: { attributes: [] }
                }
            ]
        });

        if (mealtype == null) {
            return res.status(400).json({ error: "Meal type not found" });
        } else {
            return res.status(200).json(mealtype);
        }
    } catch (err) {
        res.status(500).json({ error: err.message || "Something went wrong" });
    }
}

module.exports = { createMealtype, getAllMealtypes, getMealtypesByRestaurant, getRestaurantsByMealtype }