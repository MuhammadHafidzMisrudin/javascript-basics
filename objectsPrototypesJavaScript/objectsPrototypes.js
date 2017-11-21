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

var fred = new Player("Fred", 10000, 5);
