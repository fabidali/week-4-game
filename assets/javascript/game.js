
//The player will be shown a random number at the start of the game
//When the player click_gems on a crystal, it will add a specific amount of points to the player's total score
//Keep re-displaying the score to the user after the button click_gems
//Check if the user won
//Check if the user lost

var wins = 0;
var losses = 0;
var add = 0;
var random = Math.round(Math.random()*101)+19;
console.log(random);
$("#random_display").html("random guess "+random);


//Pick 4 Random buttons, 1 for each button


var yellow = Math.round(Math.random()*11)+1;
var red = Math.round(Math.random()*11)+1;
var blue = Math.round(Math.random()*11)+1;
var green = Math.round(Math.random()*11)+1;



$("#red").attr("data", red);
$("#blue").attr("data", blue);
$("#yellow").attr("data", yellow);
$("#green").attr("data", green);


//updates add in html

var updateadd = function (){
	$('.add').empty();
	$('.add').append(add);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}


//restart function
var restart = function(){
	add = 0;
    total = Math.floor((Math.random()* 100) + 19);

	$('.total').empty();
	$('.total').append(total);

	red = Math.round(Math.random()*11)+1;
    blue = Math.round(Math.random()*11)+1;
    yellow = Math.round(Math.random()*11)+1;
    green = Math.round(Math.random()*11)+1;
    //alert('restart');
    updateadd();
}
var logic = function (){
	if (add == total) {
		wins = wins + 1;
		
		
	}else if(add > total){
		losses = losses + 1;
		restart();

	}else{
		updateadd();
	}
}
$('.total').append(total);

$('.add').append(add);

//function

$(document).ready(function(){
	$('#red').click_gem(function(){
		add = add + red;
		logic();
	})
	$('#blue').click_gem(function(){
		add = add + blue;
		logic();
	})
	$('#yellow').click_gem(function(){
		add = add + yellow;
		logic();
	})
	$('#green').click_gem(function(){
		add = add + green;
		logic();
	})
});