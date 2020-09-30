// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");
// --------------------------------------------------------------------

var burger = {

    // burger.selectAll method
    selectAll: function (callback) {
        // Calling the orm.selectAll method
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },

    // burger.insertOne method
    insertOne: function (cols, vals, callback) {
        // Calling the orm.insertOne method
        orm.insertOne("burgers", cols, vals, function (res) {
            callback(res);
        });
    },

    // burger.updateOne method
    updateOne: function (objColVals, condition, callback) {
        // Calling the orm.updateOne method
        orm.updateOne("burgers", objColVals, condition, function (res) {
            callback(res);
        });
    },

    // burger.delete method
    delete: function (condition, callback) {
        // Calling the orm.delete method
        orm.delete("burgers", condition, function (res) {
            callback(res);
        });
    }
}

// --------------------------------------------------------------------
// Export the database function for use in the controller (burgers_controllers.js)
module.exports = burger;