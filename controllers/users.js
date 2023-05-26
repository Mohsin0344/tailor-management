const user = require("../models/user");
const Sizes = require('../models/sizes');
const Order = require('../models/orders');
const bcrypt = require('bcrypt');
const saltRounds = 10;
let ePassword;

module.exports = {
    createUser: async (req, res, next) => {

        try {

            let { name, age, gender, address, phone_number, email, password } = req.body;

            if(!name || !age || !gender || !address || !phone_number || !email || !password) {
                return res.status(400).send(
                    {
                        "message": "Some data is missing"
                    }
                );
            }

            const checkIfUserAlreadyExists = await user.findOne(
                {
                    where: {
                        email
                    }
                }
            );

            if(checkIfUserAlreadyExists) {
                return res.send(
                    {
                        "message": "User already exists"
                    }
                );
            }
            
            const createdUser = await user.create({
                name: name,
                age: age,
                phone_number: phone_number,
                address: address,
                gender: gender,
                email: email,
                password 
              });
        
              res.send({
                "message": "User created successfully",
                "data": createdUser
              });
              
        } catch(e) {
            res.status(400).send({
                "message": e.message,
            });
        }
    },

    login: async (req, res, next) => {

        try {
            const { email, password} = req.body;

            if(!email || !password) {
                return res.status(400).send(
                    {
                        "message": "email and password are required"
                    }
                );
            }

            const loginUser = await user.findOne(
                {
                    where: {
                        email
                    }
                }
            );

            if(!loginUser) {
               return res.status(404).send(
                    {
                        "message": "User does not exists try another mail or sign up"
                    }
                );
            }

            bcrypt.compare(password, loginUser.password, function(err, result) {
                if(result) {
                   return res.send(
                        {
                            "message": "Logged in successfully"
                        }
                    );
                }

                res.status(400).send(
                    {
                        "messsage": "Incorrect Passoword"
                    }
                );
            });

        } catch(e) {
            res.status(500).send(
                {
                    "message": e
                }
            );
        }
    },

    get: async (req, res, next) => {
    
        try {

            const userId = req.userId;

            if(!userId) {
                return res.send({
                    "message": "user id is required"
                });
            }

            const getUser = await user.findOne(
                {
                    where: {
                        id: userId
                    }
                }
            );

            if(!getUser) {
                return res.send({
                    "message": "User does not exists"
                });
            }

            res.send(
                {
                    "message": "user found",
                    "data": getUser
                }
            );
        } catch(e) {
            res.status(400).send({
                "message": e.message,
            });
        }
    },

    addSizes: async (req, res, next) => {

         try {

            const userId = req.userId;
            const {length, width, fk_size_type_id} = req.body;

            if(!userId || !length || !width || !fk_size_type_id) {
                return res.send(
                    {
                        "message": "Some data is missing",
                    }
                );
            }

            const sizes = await Sizes.create(
                {
                    length,
                    width,
                    fk_user_id: userId,
                    fk_size_type_id
                }
            );

            res.send(
                {
                    "message": "Size added successfully",
                    'data': sizes
                }
            );
         } catch(e) {
            res.status(400).send({
                "message": e.message,
            });
         }
    }
}