const Menuitem = require("../models").Menuitem;
const Restaurant = require("../models").Restaurant;

// This method create new menu item
const createMenuitem = async (req, res) => {
    try {
        let { restaurantId } = req.params;
        let menu = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            quantity: req.body.quantity,
            price: req.body.price,
        };

        let restaurant = await Restaurant.findOne({ where: { id: restaurantId } });

        if (restaurant == null) {
            return res.status(400).json({ error: "Restaurant not found" });
        } else {
            let menuitem = await Menuitem.create(menu);
            // addMenuitem method adds the ids of both restaurant and menuitem in the Junction table
            restaurant.addMenuitem(menuitem);
            return res.status(200).json({ message: "Menu item created" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message || "Something went wrong" });
    }
}

// This method return all Menu items with their retaurant
const getAllMenuitems = async (req, res) => {
    try {
        let menuitems = await Menuitem.findAll({
            include: [
                {
                    model: Restaurant,
                    through: { attributes: [] }
                }
            ]
        });
        res.status(200).json(menuitems);
    } catch (err) {
        res.status(500).json({ error: err.message || "Something went wrong" });
    }
}

// This method returns all the menuitems of specific restaurant
const getMenuitemsByRestaurant = async (req, res) => {
    try {
        let { restaurantId } = req.params;
        let restaurant = await Restaurant.findOne({
            where: { id: restaurantId },
            include: [
                {
                    model: Menuitem,
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

// This method returns all the Restaurants of specific menuitem
const getRestaurantsByMenuitem = async (req, res) => {
    try {
        let { menuitemId } = req.params;
        let menuitem = await Menuitem.findOne({
            where: { id: menuitemId },
            include: [
                {
                    model: Restaurant,
                    through: { attributes: [] }
                }
            ]
        });

        if (menuitem == null) {
            return res.status(400).json({ error: "Menu item not found" });
        } else {
            return res.status(200).json(menuitem);
        }
    } catch (err) {
        res.status(500).json({ error: err.message || "Something went wrong" });
    }
}

module.exports = { getAllMenuitems, createMenuitem, getMenuitemsByRestaurant, getRestaurantsByMenuitem }