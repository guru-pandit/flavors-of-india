const Menuitem = require("../models").Menuitem;
const Restaurant = require("../models").Restaurant;

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

module.exports = { getAllMenuitems, }