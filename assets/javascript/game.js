
// Variables to hold the total wins, losses and users running total
var wins = 0;
var losses = 0;
var total = 0;

// Randomly generated values for the gems (1-12)
var gem1 = (Math.floor(Math.random() * 12) + 1);
console.log("gem 1: ", gem1);
var gem2 = (Math.floor(Math.random() * 12) + 1);
console.log("gem 2: ", gem2);
var gem3 = (Math.floor(Math.random() * 12) + 1);
console.log("gem 3: ", gem3);
var gem4 = (Math.floor(Math.random() * 12) + 1);
console.log("gem 4: ", gem4);

// Randomly generated value for the num to be matched (19-120) and display on browser
var match = (Math.floor(Math.random() * 101) + 19);
console.log(match);

$("#goal").html("Goal: " + match);






$("#gem1").on("click", function () {
    total = total + gem1;
    $("#score").html(total);
    console.log("total: ", total);

    if (total === match) {
        wins++
        total = 0;
        console.log("win");
        console.log("Win total: ", wins);
        $("#wins-total").html("Wins: " + wins);
        $("#losses-total").html("Losses: " + losses);
        $("#score").html(total);
        gem1 = (Math.floor(Math.random() * 12) + 1);
        console.log("gem 1: ", gem1);
        gem2 = (Math.floor(Math.random() * 12) + 1);
        console.log("gem 2: ", gem2);
        gem3 = (Math.floor(Math.random() * 12) + 1);
        console.log("gem 3: ", gem3);
        gem4 = (Math.floor(Math.random() * 12) + 1);
        console.log("gem 4: ", gem4);
        match = (Math.floor(Math.random() * 101) + 19);
        $("#goal").html("Goal: " + match);

      
    } else if (total > match) {
        losses++;
        total = 0;
        console.log("lose");
        console.log("lose total: ", losses);
        $("#wins-total").html("Wins: " + wins);
        $("#losses-total").html("Losses: " + losses);
        $("#score").html(total);
        gem1 = (Math.floor(Math.random() * 12) + 1);
        console.log("gem 1: ", gem1);
        gem2 = (Math.floor(Math.random() * 12) + 1);
        console.log("gem 2: ", gem2);
        gem3 = (Math.floor(Math.random() * 12) + 1);
        console.log("gem 3: ", gem3);
        gem4 = (Math.floor(Math.random() * 12) + 1);
        console.log("gem 4: ", gem4);
        match = (Math.floor(Math.random() * 101) + 19);
        $("#goal").html("Goal: " + match);
    }
});



$("#gem2").on("click", function () {
    total = total + gem2;
    $("#score").html(total);
    console.log("total: ", total);

    if (total === match) {
        wins++
        total = 0;
        $("#wins-total").html("Wins: " + wins);
        $("#losses-total").html("Losses: " + losses);
        $("#score").html(total);
        gem1 = (Math.floor(Math.random() * 12) + 1);
        gem2 = (Math.floor(Math.random() * 12) + 1);
        gem3 = (Math.floor(Math.random() * 12) + 1);
        gem4 = (Math.floor(Math.random() * 12) + 1);
        match = (Math.floor(Math.random() * 101) + 19);
        $("#goal").html("Goal: " + match);
    } else if (total > match) {
        losses++;
        total = 0;
        $("#wins-total").html("Wins: " + wins);
        $("#losses-total").html("Losses: " + losses);
        $("#score").html(total);
        gem1 = (Math.floor(Math.random() * 12) + 1);
        gem2 = (Math.floor(Math.random() * 12) + 1);
        gem3 = (Math.floor(Math.random() * 12) + 1);
        gem4 = (Math.floor(Math.random() * 12) + 1);
        match = (Math.floor(Math.random() * 101) + 19);
        $("#goal").html("Goal: " + match);
    }
});


$("#gem3").on("click", function () {
    total = total + gem3;
    $("#score").html(total);
    console.log("total: ", total);
    if (total === match) {
        wins++
        total = 0;
        $("#wins-total").html("Wins: " + wins);
        $("#losses-total").html("Losses: " + losses);
        $("#score").html(total);
        gem1 = (Math.floor(Math.random() * 12) + 1);
        gem2 = (Math.floor(Math.random() * 12) + 1);
        gem3 = (Math.floor(Math.random() * 12) + 1);
        gem4 = (Math.floor(Math.random() * 12) + 1);
        match = (Math.floor(Math.random() * 101) + 19);
        $("#goal").html("Goal: " + match);
    } else if (total > match) {
        losses++;
        total = 0;
        $("#wins-total").html("Wins: " + wins);
        $("#losses-total").html("Losses: " + losses);
        $("#score").html(total);
        gem1 = (Math.floor(Math.random() * 12) + 1);
        gem2 = (Math.floor(Math.random() * 12) + 1);
        gem3 = (Math.floor(Math.random() * 12) + 1);
        gem4 = (Math.floor(Math.random() * 12) + 1);
        match = (Math.floor(Math.random() * 101) + 19);
        $("#goal").html("Goal: " + match);
    }
});


$("#gem4").on("click", function () {
    total = total + gem4;
    $("#score").html(total);
    console.log("total: ", total);
    if (total === match) {
        wins++
        total = 0;
        $("#wins-total").html("Wins: " + wins);
        $("#losses-total").html("Losses: " + losses);
        $("#score").html(total);
        gem1 = (Math.floor(Math.random() * 12) + 1);
        gem2 = (Math.floor(Math.random() * 12) + 1);
        gem3 = (Math.floor(Math.random() * 12) + 1);
        gem4 = (Math.floor(Math.random() * 12) + 1);
        match = (Math.floor(Math.random() * 101) + 19);
        $("#goal").html("Goal: " + match);
    } else if (total > match) {
        losses++;
        total = 0;
        $("#wins-total").html("Wins: " + wins);
        $("#losses-total").html("Losses: " + losses);
        $("#score").html(total);
        gem1 = (Math.floor(Math.random() * 12) + 1);
        gem2 = (Math.floor(Math.random() * 12) + 1);
        gem3 = (Math.floor(Math.random() * 12) + 1);
        gem4 = (Math.floor(Math.random() * 12) + 1);
        match = (Math.floor(Math.random() * 101) + 19);
        $("#goal").html("Goal: " + match);
    }
});


// Display the game progression
$("#wins-total").html("Wins: " + wins);
$("#losses-total").html("Losses: " + losses);


