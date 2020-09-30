
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    // Function on click
    // Adding a burger to the list
    // Making an AJAX call to the API
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger");
                location.reload();
            }
        );
    });


    // Function on click
    // CHANGE BURGER EATEN STATUS
    // Making an AJAX call to the API
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var currentDevouredStatus = $(this).data("devoured");

        var update = 0;

        if (currentDevouredStatus === 0) {
            update = 1;
        }
        if (currentDevouredStatus === 1) {
            update = 0;
        }

        var newDevouredStatus = {
            devoured: update
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredStatus
        }).then(
            function () {
                console.log("Changed devoured status to ", newDevouredStatus);
                location.reload();
            }
        )
    });





    // Function on click
    // DELETE BURGER from the list
    // Making an AJAX call to the API

})