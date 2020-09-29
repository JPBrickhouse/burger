// Import MySQL connection
var connection = require("../config/connection.js");





// REFERENCE the CATS APP
// -- printQuestionMarks function
// -- objToSql function




// Object for all the SQL statement functions
var orm = {

    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        })
    },



    insertOne: function () {

    },



    updateOne: function () {

    }

}



// Export the orm object for the model (burger.js)
module.exports = orm;