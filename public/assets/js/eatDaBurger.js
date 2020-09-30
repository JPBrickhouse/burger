
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    // Function on click
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Creating a newBurger object with a key of burger_name
        // Setting the value of the key based on the input from the text input with the id of "burg"
        var newBurger = {
            burger_name: $("#burg").val().trim()
        };

        // Making an AJAX call to the API
        // CREATE (POST) a new burger in the database
        // Pass the newBurger object as the data
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    // Function on click
    $(".change-devoured").on("click", function (event) {
        
        // From the button clicked...
        // - Get the value of the data attribute corresponding to id
        // - Get the value of the data attribute corresponding to devoured
        var id = $(this).data("id");
        var currentDevouredStatus = $(this).data("devoured");

        // Running a small conditional based on the currentDevouredStatus
        // Revising the value of the variable update accordingly
        var update = 0;
        if (currentDevouredStatus === 0) {
            update = 1;
        }
        if (currentDevouredStatus === 1) {
            update = 0;
        }

        // Creating a newBurger object with a key of devoured
        // Setting the value of the key based on update, which corresponds to the updated devoured status
        var newDevouredStatus = {
            devoured: update
        };

        // Making an AJAX call to the API
        // PUT (UPDATE) a burger in the database, depending on its devoured status
        // Pass the newDevouredStatus object as the data
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredStatus
        }).then(
            function () {
                console.log("Changed devoured status to ", newDevouredStatus);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    // Function on click
    $(".delete-burger").on("click",function(event){
        
        // From the button clicked...
        // - Get the value of the data attribute corresponding to id
        var id = $(this).data("id");

        // Making an AJAX call to the API
        // DELETE a burger from the database
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("Deleted burger with the id of ",id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

})