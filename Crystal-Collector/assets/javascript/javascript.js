$(document).ready(function() {

	var randomNumber = [];

	for (var i = 19; i < 120; i++) {
		randomNumber.push(i);
	}

	var crystalValue = [];

	for (var k = 1; k < 12; k++) {
		crystalValue.push(k);
	}

	


	var randNumber; 
	var crystalNumbers = []; 
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

	} 

	function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}

		console.log("crystal numbers: " + crystalNumbers);

	}

	function crystalValues(arr) {
		for (j = 0; j < arr.length; j++) {

		$("#button-" + (j+1)).attr("value", arr[j]);
		console.log(this);
		}
		amber = arr[0];
		amethyst = arr[1];
		ruby = arr[2];
		topaz = arr[3];
	} 


	function gameReset(x) {

		crystalNumbers = []; 

		pickRandomNumber(randomNumber);

		pickRandomCrystals(crystalValue);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	}


	pickRandomNumber(randomNumber); 
	pickRandomCrystals(crystalValue); 
	crystalValues(crystalNumbers);



		$("#button-1").on("click", function() {

			totalScore += amber;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += amethyst;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += ruby;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += topaz;
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
