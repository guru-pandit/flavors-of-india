// Importing required packages
const express = require("express");
const cors = require("cors");
const db = require("./src/models");
require("dotenv").config();

global.__basedir = __dirname;
// console.log("BASEDIR:", __basedir);

const app = express();

let corsOptions = {
    origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));

// calling sync() method
db.sequelize.sync();
// In Development, you need to drop existing tables and re-sync database. for that use force:true as following
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync DB");
// });

// Routes
require("./src/routes/user.route")(app);
require("./src/routes/restaurant.route")(app);
require("./src/routes/menuitem.route")(app);
require("./src/routes/mealtype.route")(app);
require("./src/routes/review.route")(app);

// Setting Port and listening for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
