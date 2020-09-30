
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    // Function on click
    // CHANGE BURGER EATEN STATUS
    // Making an AJAX call to the API




    // Function on click
    // ADD A BURGER TO THE LIST
    // Making an AJAX call to the API

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim()
        };

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Added new burger");
                location.reload();
            }
        );
    });



    // Function on click
    // DELETE BURGER from the list
    // Making an AJAX call to the API

})