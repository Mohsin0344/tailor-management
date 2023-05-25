const express = require("express");
var router = express.Router();
var orderController = require("../controllers/orders")
var orderController = require('../controllers/orders')
var orderId = require('../middleware/order_id');

router.get("/:orderId/details", orderId, orderController.details);

router.put("/:orderId/deliver", orderId, orderController.deliver);

router.post("/placeOrder", orderController.placeOrder);

module.exports = router;  