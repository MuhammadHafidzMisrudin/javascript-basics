// Simple prototype example

function Player(n, s, r) {
	this.name = n;
	this.score = s;
	this.rank = r;
}

Player.prototype.logInfo = function() {
	// body...
	// TODO
	console.log("I am:", this.name);
}

Player.prototype.promote = function() {
	// body...
	// TODO
	this.rank++;
	console.log("My new rank is: ", obj);
}

// instantiate an object Player called fred/Fred of variable of fred.
// pass paramaters, name: Fred, score: 10000 and rank: 5
var fred = new Player("Fred", 10000, 5);
fred.logInfo();
fred.promote();
