//Pick 4 Random buttons, 1 for each button
//The player will be shown a random number at the start of the game
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score
//Keep re-displaying the score to the user after the button clicks
//Check if the user won
//Check if the user lost

var wins = 0;
var losses = 0;
var addition = 0;
var random = Math.round(Math.random()*101)+19;
console.log(random);
$("#random_display").html("random guess "+random);




var yellow = Math.round(Math.random()*11)+1;
var red = Math.round(Math.random()*11)+1;
var blue = Math.round(Math.random()*11)+1;
var green = Math.round(Math.random()*11)+1;



$("#red").attr("data", red);
$("#blue").attr("data", blue);
$("#yellow").attr("data", yellow);
$("#green").attr("data", green);


