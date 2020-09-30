
// --------------------------------------------------------------------
var express = require("express");

var router = express.Router();

// Import the model(burger.js) to use its database functions
var burger = require("../models/burger.js");

// --------------------------------------------------------------------
// Create all the routres and set up logic within those routes where required
// --------------------------------------------------------------------
// When an AJAX call is made to this route...
// READ (GET) all the burgers from the database
router.get("/", function (req, res) {

    // Calling the burger.selectAll method
    burger.selectAll(function (data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render('index', handlebarsObject);
    });
});
// --------------------------------------------------------------------
// When an AJAX call is made to this route...
// CREATE (POST) a new burger in the database
router.post("/api/burgers", function (req, res) {

    // Calling the burger.insertOne method
    burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
        res.json({ id: result.id });
    })
})
// --------------------------------------------------------------------
// When an AJAX call is made to this route...
// PUT (UPDATE) a burger in the database, depending on its devoured status
router.put("/api/burgers/:id", function (req, res) {
    
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    // Calling the burger.updateOne method
    burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});
// --------------------------------------------------------------------
// When an AJAX call is made to this route...
// DELETE a burger from the database
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    // Calling the burger.delete method
    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// --------------------------------------------------------------------
// Exporting the routes for server.js to use
module.exports = router;