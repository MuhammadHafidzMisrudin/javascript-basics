// basic
document.getElementById("mainArticle").className = "highlight";

// use jQuery - basic
jQuery("#mainArticle").addClass("highlight");

// find all elements with a particular class
jQuery(".tourDescription").addClass("highlight");

// find all elements with a particular tag
jQuery("li").addClass("highlight");

// find the last li
jQuery("li:last").addClass("highlight");

// find any paragraph that contain the word "packages"
jQuery("p:contains('packages')").addClass("highlight");
