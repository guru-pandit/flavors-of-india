//to import required models
const { Restaurant } = require("../models");

//to get restaurants by location
const getRestaurantsByLocation = async(req, res) => {
        try {
            const locationId = req.params.locationId;
            const response = await Restaurant.findAll({
                where: { /*this id variable from restaurant table*/ locationId: locationId /*this id variable from params*/ }
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
                where: { /*this id variable is primary key of restaurant table*/ id: restaurantId /*this id variable from params*/ }
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
    //to export the controller functions
module.exports = { getRestaurantsByLocation, getRestaurantDetailsById }