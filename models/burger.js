// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {

    selectAll: function () {
        orm.selectAll({

        });
    },


    insertOne: function () {
        orm.insertOne({

        });
    },


    updateOne: function () {
        orm.updateOne({

        });
    }
}



// Export the database function for the controller(burgers_controllers.js)
module.exports = burger;