var express = require("express");
var router = express.Router();
var userController = require('../controllers/users')

router.get("/singleuser", userController.get);

router.post("/addSizes", userController.addSizes);

module.exports = router;