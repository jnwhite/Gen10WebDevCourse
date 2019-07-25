/*
Name: Jake White
Date Created: 07/24/2019
Last Revision: 
-->
*/

function clearErrors() {
	for (var loopCounter = 0; loopCounter < document.forms["gamePlay"].elements.length; loopCounter++) {
		if (document.forms["gamePlay"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
			document.forms["gamePlay"].elements[loopCounter].parentElement.className = "input-group col-4";
		}
	}
}

function resetForm() {
	clearErrors();
	document.forms["gamePlay"]["startingBet"].value = "";
	document.getElementById("results").style.display = "none";
	document.getElementById("resetButton").style.display = "none"
	document.getElementById("submitButton").innerText = "Submit";
	document.forms["gamePlay"]["startingBet"].focus();
}

function rollDice(numSides) {
		return Math.floor(Math.random() * numSides) + 1;
}

function findMax(myArray) {
	var max = 0;
	var indexMax;
	for (var i = 0; i <= myArray.length; i++) {
			if (myArray[i] >= max) {
				max = myArray[i];
				indexMax = Number(i);
			}
	}
	return [indexMax, max];
}

function playGame() {
	clearErrors();
	var initialBet = document.forms["gamePlay"]["startingBet"].value;
	if (initialBet <= 0 || initialBet == "") {
		alert("Please enter a positive integer as your bet.");
		document.forms["gamePlay"].elements[loopCounter].parentElement.className = "input-group col-4 has-error";
		document.forms["luckSevens"]["startingBet"].value = "";
		return false;
	}
	var gameMoney = Number(initialBet);	
	var money = [];
	var diceTracker = [];
	var diceValue;
	money[money.length] = gameMoney;
	diceTracker[diceTracker.length] = 0;
	do {
		diceValue = rollDice(6) + rollDice(6);
		if (diceValue == 7) {
			gameMoney = gameMoney + 4;
			money[money.length] = gameMoney;
			diceTracker[diceTracker.length] = diceValue;
		}
		gameMoney = gameMoney - 1;
		money[money.length] = gameMoney;
		diceTracker[diceTracker.length] = diceValue;
	} while (gameMoney >= 1)
	var values = findMax(money);
	document.getElementById("results").style.display = "block";
	document.getElementById("resetButton").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again?";
	document.getElementById("Bet").innerText = "$" + initialBet + ".00";
	document.getElementById("totalRolls").innerText = diceTracker.length - 1;
	document.getElementById("highestAmount").innerText = "$" + values[1] + ".00";
	document.getElementById("rollsMax").innerText = values[0];
/*
	var textTest = "";
	for (var i = 0; i < money.length; i++) {
		textTest += money[i] + "<br>";
	}
	document.getElementById("test").innerHTML = textTest;
*/
	return false;
}
