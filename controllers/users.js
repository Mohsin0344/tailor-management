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
            
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(password, salt, async function(err, hash) {
                  try {
                    const createdUser = await user.create({
                      name: name,
                      age: age,
                      phone_number: phone_number,
                      address: address,
                      gender: gender,
                      email: email,
                      password: hash 
                    });
              
                    res.send({
                      "message": "User created successfully",
                      "data": createdUser
                    });
                  } catch (err) {
                    res.status(500).send({
                        "message": e.message,
                    });
                  }
                });
              });
              
        } catch(e) {
            res.status(400).send({
                "message": e.message,
            });
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