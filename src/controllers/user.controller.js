const db = require("../models");
const {User}= require("../models");
const bcrypt = require("bcryptjs"); //bcrypt password
 

const createUser = async (req, res) => {
try {
  
    // for data get
      const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      countryCode: req.body.countryCode,
      contact:req.body.contact,
      password: req.body.password,
      gender: req.body.gender,
      image: req.body.image,
      address: req.body.address,
      country: req.body.country,
      state:req.body.state, 
      city: req.body.city,
    };
    const info = await User.findOne({ where: { email: user.email } }); //await means handling async request
    if (info) {
      res.send("email already exist");
    } else {
      let hashedPassword = await bcrypt.hash(user.password, 8); // 8 round to encrypt password
      user.password = hashedPassword; //save in database
      
      const data = await User.create(user); // create new user
      if (data) {
        return res.status(200).json({
          message: " User register succesfull",
          user: data,
        });
      } else {
        return res.status(400).json({
          message: " User register unsuccesfull",
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

// for login

const loginUser = async (req, res) => {
  //  for login

  try {
    const { email, password } = req.body;

    const data = await User.findOne({ where: { email } });

    if (!data) {
      return res.status(400).json({ error: "user does not exist" });
    }else{
      let isPassMatched = await bcrypt.compareSync(
      password,
      data.dataValues.password
    );
    if (isPassMatched) {
      return res.status(200).json({ message: "user login succesfull" });
    } else {
      return res.status(500).json({ error: "user login unsuccesfull" });
    }
    }
    
  } catch (err) {
    console.log(err);
  }
};

const getUsersById = async (req, res) => {
  console.log(req.params); //parameters
  let { id } = req.params;
  let info = await User.findOne({
    
    where: { id: id },

  });
  if (info) {
    res.status(200).json({ data: info });
  } else {
    res.status(400).json({ error: "user not found" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = await User.findOne({ where: { id: userId } });
    if (data) {
      data.isDeleted = true;
      const deleteuser = data.save();
      if (deleteuser) {
        return res
          .status(200)
          .json({ message: "user was deleted successfully!" });
      } else {
        return res.status(500).json({ error: "Cannot delete user" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports={createUser,loginUser,getUsersById,deleteUser}