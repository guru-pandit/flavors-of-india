//to import required models
const { Restaurant, Menuitem, Mealtype } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;

//to get restaurants by location
const getRestaurantsByLocation = async(req, res) => {
        try {
            const locationId = req.params.locationId;
            const response = await Restaurant.findAll({
                where: { /*this id variable from restaurant table*/ locationId: locationId /*this id variable from params*/ },
                include: [{ model: Menuitem, attributes: ["name", "description", "price"] }]
            })

            //to check if we get response or not
            /*findAll method returns array of objects because of that we check length of array to ensure 
            whether array is empty or not*/
            if (response.length > 0) {
                return res.status(200).json({ message: "Restaurants Fetched Successfully.", restaurants: response });
            } else {
                return res.status(500).json({ error: "Restaurants Not Fetched Successfully." });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Restaurants Not Fetched Successfully.", error: err });
        }
    }
    //to get restaurant details by its id
const getRestaurantDetailsById = async(req, res) => {
    try {
        const restaurantId = req.params.restaurantId;
        const response = await Restaurant.findOne({
            where: { /*this id variable is primary key of restaurant table*/ id: restaurantId /*this id variable from params*/ },
            include: [{ model: Menuitem, attributes: ["name", "description", "price"] }]
        })

        //to check if we get response or not
        /*findOne method returns single object because of that we check whether object is empty or not*/
        if (response !== null) {
            return res.status(200).json({ message: "Restaurant Details Fetched Successfully...", restaurantdetails: response });
        } else {
            return res.status(500).json({ error: "Restaurant Details NOT Fetched Successfully..." });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Restaurant Details NOT Fetched Successfully...", error: err });
    }
}

//to filter restaurants
const filterRestaurants = async(req, res) => {
    try {
        const { mealtypeId, locationId, cuisineId, hcost, lcost } = req.body;

        var payload = {}

        if (locationId && lcost && hcost) {
            payload = {
                locationId: locationId,
                cost: {
                    [Op.and]: {
                        [Op.lte]: hcost,
                        [Op.gte]: lcost
                    }
                }
            }
        }
        if (mealtypeId && locationId) {
            payload = {
                mealtypeId: mealtypeId,
                locationId: locationId
            }
        }
        if (mealtypeId && lcost && hcost) {
            payload = {
                mealtypeId: mealtypeId,
                cost: {
                    [Op.and]: {
                        [Op.lte]: hcost,
                        [Op.gte]: lcost
                    }
                }
            }
        }
        if (mealtypeId && locationId && lcost && hcost) {
            payload = {
                mealtypeId: mealtypeId,
                area: locationId,
                cost: {
                    [Op.and]: {
                        [Op.lte]: hcost,
                        [Op.gte]: lcost
                    }
                }
            }
        }
        if (mealtypeId && cuisineId) {
            payload = {
                mealtypeId: mealtypeId,
                cuisineId: cuisineId
            }
        }
        if (mealtypeId && locationId && cuisineId) {
            payload = {
                mealtypeId: mealtypeId,
                area: locationId,
                cuisineId: cuisineId
            }
        }
        if (mealtypeId && cuisineId && lcost && hcost) {
            payload = {
                mealtypeId: mealtypeId,
                cuisineId: cuisineId,
                cost: {
                    [Op.and]: {
                        [Op.lte]: hcost,
                        [Op.gte]: lcost
                    }
                }
            }
        }
        const response = await Restaurant.findAll({ where: payload })
        if (response) {
            return res.status(200).json({ message: "Restaurants Fetched Successfully...", restaurants: response });

        } else {
            return res.status(500).json({ error: "Restaurants NOT Fetched Successfully..." });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Restaurants NOT Fetched Successfully...", error: err });
    }
}

//to add new restaurant
const addNewRestaurant = async(req, res) => {
    try {
        const restaurant = {
            name: req.body.name,
            address: req.body.address,
            contact: req.body.contact,
            cost: req.body.cost,
            locationId: req.body.locationId
        }
        const isExist = await Restaurant.findOne({ where: { name: restaurant.name, locationId: restaurant.locationId } })
        if (isExist === null) {
            const restaurantCreated = await Restaurant.create(restaurant)
            if (restaurantCreated !== null) {
                return res.status(200).json({ message: "Restaurant Added Successfully", restaurant: restaurantCreated })
            } else {
                return res.status(500).json({ error: "Restaurant NOT Added Successfully" })
            }
        } else {
            return res.status(500).json({ message: "Restaurant already Exist" })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Restaurant NOT Added Successfully", Error: err })
    }
}

//to export the controller functions
module.exports = { getRestaurantsByLocation, getRestaurantDetailsById, filterRestaurants, addNewRestaurant }