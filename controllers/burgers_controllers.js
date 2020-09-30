var express = require("express");

var router = express.Router();

// Import the model()
var burger = require("../models/burger.js");

// Create all the routres and set up logic within those routes where required

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render('index', handlebarsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
        res.json({ id: result.id });
    })

})





module.exports = router;