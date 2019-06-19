$(document).ready(function() {

	var randomNumber = [];

	for (var i = 19; i < 120; i++) {
		randomNumber.push(i);
	}

	var crystalValue = [];

	for (var k = 1; k < 12; k++) {
		crystalValue.push(k);
	}


	var randNumber; // number to match
	var crystalNumbers = []; // for array of random crystal values

	var amber;
	var ruby;
	var topaz;
	var amethyst;

  var totalScore = 0;
  	var wins = 0;
	var losses = 0;



	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);

	} // END of pickRandomNumber function

	// pick random numbers for crystals

	function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}
    // check which numbers have been picked
		console.log("crystal numbers: " + crystalNumbers);

	} // END of pickRandomCrystals function

	function crystalValues(arr) {

		// change value of each crystal button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i + 1)).attr("value", arr[i]);
		console.log(this);
		}
		amber = arr[0];
		ruby = arr[1];
		topaz = arr[2];
		amethyst = arr[3];
	} 


	function gameReset(x) {

		crystalNumbers = []; // clears crystal number values

		pickRandomNumber(randomNumber);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} // END of gameReset function

	// *** GAME SETTINGS AT START ***

	pickRandomNumber(randomNumber); // random number to match
	pickRandomCrystals(crystals); // array of random crystal values
	crystalValues(crystalNumbers);



		$("#button-1").on("click", function() {

			totalScore += amethyst;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += topaz;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += ruby;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += amber;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		if (totalScore == randNumber) {
			wins++;
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);
			setTimeout(function() {gameReset("You won!")}, 200);
		}

		else if (totalScore > randNumber){
			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);
			setTimeout(function() {gameReset("You lost!")}, 200);
		}
	});

});
