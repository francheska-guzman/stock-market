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
/*Change to JQuery*/
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