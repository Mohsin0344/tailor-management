var express = require("express");
var router = express.Router();
var userController = require('../controllers/users')
var orderController = require('../controllers/orders')
var orderRoute = require("./orders")
var orderId = require('../middleware/order_id');

router.get("/singleuser", userController.get);

router.post("/addSizes", userController.addSizes);

router.post("/placeOrder", orderController.placeOrder);

router.use("/orders/:orderId", orderId, orderRoute);

module.exports = router;