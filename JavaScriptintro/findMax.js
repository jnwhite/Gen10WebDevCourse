function rollDice(numSides) {
		return Math.floor(Math.random() * numSides) + 1;
}

var newArray = [rollDice(100), rollDice(100), rollDice(100), rollDice(100), rollDice(100), rollDice(100), rollDice(100), rollDice(100), rollDice(100), rollDice(100)];

var max = 0;
var test;

for (var i = 0; i <= newArray.length; i++) {
	test = newArray[i];
	if (test >= max) {
		max = test;
	}
}

console.log("The Max value in newArray is: " + max);
console.log("The values in newArray areL " + newArray);