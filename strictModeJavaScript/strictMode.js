"use strict";

// didn't use var
var foo = "Hello world";

// new object with two properties with the same name
var myObject = {
	sameName: 1,
	differentName: 2
};

// function with the same name for multiple parameters
function myFunction(a, b, c) {
	return a + b + c;
}

document.getElementById("mainContent").innerHTML = foo;
