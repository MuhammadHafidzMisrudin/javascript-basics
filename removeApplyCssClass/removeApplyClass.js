// prevent a form from submitting
// function to handle a functionality of CSS className and to be rendered on window if event is triggered
function preparePage() {
	document.getElementById("mainContent").onclick = function() {
		if (document.getElementById("mainContent").className == "example") {
			document.getElementById("mainContent").className = "";
		} else {
			document.getElementById("mainContent").className = "example";
		}
	};
}

window.onload = function() {
	preparePage();
};
