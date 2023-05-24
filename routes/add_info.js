var express = require("express");
var router = express.Router();
var userController = require('../controllers/users')
var orderRoute = require("./orders")

router.get("/singleuser", userController.get);

router.post("/addSizes", userController.addSizes);

router.use("/orders", orderRoute);

module.exports = router;