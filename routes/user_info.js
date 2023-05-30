var express = require('express');
var router = express.Router();
const checkUser = require('../middleware/checkUser');
const addInfoRoute = require("./add_info");
const userController = require("../controllers/users");
const verifyToken = require("../middleware/verify_token");

router.get('/getAll', (req, res) => {
    res.send({
        "message": "Get all Users route" 
    });
});

router.post("/createUser", userController.createUser);

router.post('/login', userController.login);

router.use("/:userId", checkUser, verifyToken, addInfoRoute);


module.exports = router;