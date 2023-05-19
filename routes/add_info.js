var express = require("express");
var router = express.Router();

router.get("/singleuser", (req, res) => {
    let userId = req.userId;
    res.send(
        {
            "message": "Get single user route of id "  + userId
        }
    );
});

router.post("/addSizes", (req, res) => {
    res.send({
        "message": "In add sizes route"
    });
});

module.exports = router;