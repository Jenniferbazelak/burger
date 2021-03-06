

$(function () {
    $(".devour").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");

        var newdevouredState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newdevouredState
        }).then(
            function () {
                console.log("changed devoured to false");
                
                location.reload();
            }
        );
    });

    $(".submit").on("click", function (event) {
        
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        };

        console.log(newBurger);

       
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new order");
               
                location.reload();
            }
        );
    });

});