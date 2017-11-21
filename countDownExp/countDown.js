// two global variables
var secondsRemaining;
var intervalHandle;

// as soon as the page is loaded...
window.onload = function() {
	// create input text box and give it an id of "minutes"
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");
	// create a button
	var startButton = document.createElement("input");
	startButton.setAttribute("type", "button");
	startButton.setAttribute("value", "Start Countdown");
	startButton.onclick = function() {
		startCountdown();
	};
	// add to the DOM, to the div called "inputArea"
	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton);
};
