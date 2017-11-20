// Simple prototype example

function Player(n, s, r) {
	this.name = n;
	this.score = s;
	this.rank = r;
}

Player.prototype.logInfo = function() {
	// body...
	console.log("I am:", this.name);
}

var fred = new Player("Fred", 10000, 5);
