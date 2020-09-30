// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {

    selectAll: function (callback) {
        orm.selectAll("burgers",function(res) {
            callback(res);
        });
    },


    insertOne: function () {
        orm.insertOne("burgers",cols,vals, function(res) {
            cb(res);
        });
    },


    // updateOne: function () {
    //     orm.updateOne({

    //     });
    // }


    delete: function() {
        orm.delete({

        });
    }

}



// Export the database function for the controller(burgers_controllers.js)
module.exports = burger;