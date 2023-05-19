const user = require("../models/user");

module.exports = {
    createUser: async (req, res, next) => {
        let { name, age, gender, address, phone_number} = req.body;
        try {
            if(!name || !age || !gender || !address || !phone_number) {
                res.status(400).send(
                    {
                        "message": "Some data is missing"
                    }
                );
                return;
            }
            const createdUser = await user.create(
                {
                    name: name,
                    age: age,
                    phone_number: phone_number,
                    address: address,
                    gender: gender
                }
            );
            res.send({
                "message": "User created successfully",
                "data": createdUser
            });
        } catch(e) {
            res.status(400).send({
                "message": e.message,
            });
        }
    }
}