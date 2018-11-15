
// Variables to hold the total wins, losses and users running total
var wins = 0;
var losses = 0;
var total = 0;

// Randomly generated values for the gems (1-12)
var gem1 = (Math.floor(Math.random() * 12) + 1);
var gem2 = (Math.floor(Math.random() * 12) + 1);
var gem3 = (Math.floor(Math.random() * 12) + 1);
var gem4 = (Math.floor(Math.random() * 12) + 1);

// Randomly generated value for the num to be matched (19-120)
var match = (Math.floor(Math.random() * 101) + 19);

// Display initial goal and the total scor of 0.
$("#goal").html("Goal: " + match);
$("#score").html(total);


// Reset function to re-initialize the gem values and the goal value after a loss or win 
function reset() {
    gem1 = (Math.floor(Math.random() * 12) + 1);
    gem2 = (Math.floor(Math.random() * 12) + 1);
    gem3 = (Math.floor(Math.random() * 12) + 1);
    gem4 = (Math.floor(Math.random() * 12) + 1);
    match = (Math.floor(Math.random() * 101) + 19);
    total = 0;
    $("#goal").html("Goal: " + match);
    $("#wins-total").html("Wins: " + wins);
    $("#losses-total").html("Losses: " + losses);
    $("#score").html(total);
}



// Game logic...click on first gem, increase the total score by the amount associated with gem1
$("#gem1").on("click", function () {
    total = total + gem1;
    // Display the running score after every click on the gem   
    $("#score").html(total);
    // Check if the total matched the goal for a win and if so, increment wins and run the reset function 
    if (total === match) {
        wins++
        reset();
// Otherwise, check if player went over the goal and if so increment losses and run reset function
    } else if (total > match) {
        losses++;
        reset();
    }
});

// Same logic as above for the other 4 gems

$("#gem2").on("click", function () {
    total = total + gem2;
    $("#score").html(total);
    if (total === match) {
        wins++
        reset();
    } else if (total > match) {
        losses++;
        reset();
    }
});


$("#gem3").on("click", function () {
    total = total + gem3;
    $("#score").html(total);
    if (total === match) {
        wins++
        reset();
    } else if (total > match) {
        losses++;
        reset();
    }
});


$("#gem4").on("click", function () {
    total = total + gem4;
    $("#score").html(total);
    if (total === match) {
        wins++
        reset();
    } else if (total > match) {
        losses++;
        reset();
    }
});



