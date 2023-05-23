const express = require("express");
var router = express.Router();
var orderController = require("../controllers/orders")

router.get("/details", orderController.details);

router.put("/deliver", orderController.deliver);

module.exports = router;