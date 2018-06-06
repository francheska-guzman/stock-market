/*
Francheska Guzman
Final Project: March 23, 2017
Cycle 2 Cohort 4
*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i = 0;
	var x = document.getElementsByClassName("newsSlides");
	var z = document.getElementsByClassName("theNews");
		if (n > x.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = x.length;
		}
			while(i < x.length) {
				x[i].style.display = "none";
				z[i].style.display = "none";
				i++;
			}
		x[slideIndex-1].style.display = "block";
		z[slideIndex-1].style.display = "block";
}

function log() {
	var name = document.getElementById("input1").value;
	var pass = document.getElementById("input2").value;

	/* The if statement verifies if user did not enter an username OR password. 
	User have to try again. */
	if (name == "" || pass == "") {
		window.alert("Please enter your username and password. Hint: This website doesn't have authentication... Write anything in both input fields to access the Stock Market homepage.");
	}
	/* Otherwise, user receive a welcome message in a window alert, and after close it, 
	user will be redirected automatically to the homepage. */
	else {
		 setTimeout("window.location.href = 'https://francheska-guzman.github.io/stock-market/home'", 0);

	}
}

function recoverM() {
	var recoverMethod = document.getElementById("input3").value;

	if (recoverMethod == "") {
		document.getElementById("display").innerHTML = "Please tell us your username, email address or phone number.";
	}
	else {
		document.getElementById("display").innerHTML = "Thank you. The next step is answer the security questions.";
	}
}

function r() {
	var n = document.getElementById("n").value;
	var e = document.getElementById("e").value;
	var u = document.getElementById("u").value;
	var p = document.getElementById("p").value;
	var c = document.getElementById("c").value;
	var l = document.getElementById("l").value;
	var t = document.getElementById("t").value;
	var a1 = document.getElementById("a1").value;
	var a2 = document.getElementById("a2").value;

	if (n == "" || e == "" || u == "" || p == "" || c == "" || l == "" || t == "" || a1 == "" || a2 == "") {
		document.getElementById("display").innerHTML = "Please fill out all fields.";
	}
	else {
		document.getElementById("display").innerHTML = "Congratulations " + n + "! You have now successfully registered for FinTech.";
	}
}