//Importing the user model
const jwt = require('jsonwebtoken');
require ('dotenv').config();
const User = require('../models/user');


exports.signUp = async (req, res) => {

    const userExist = await User.findOne({email: req.body.email})

    if(userExist)
        return res.status(403).json({
            error: "User already exist!"
    });

    const newUser = await new User(req.body);
    await newUser.save();
    res.status(200).json({
        message: "Registered Successfully!"
    });


    exports.signIn = (req, res) => {
        //Find user by email


        //If not user, do something

        //If User, Authenticate


        //Generate token with user and id


        //Persit the token as 't' in the cookie with expiry date


    }



}
