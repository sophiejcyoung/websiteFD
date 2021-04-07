// JavaScript Document
//jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
//eslint-env browser/
//eslint 'no-console':0/

/* eslint-env es6 */
/* eslint-disable */

var menu = document.querySelector("button");
var menuInhoud = document.querySelector("#menu");
var sluitKnop = document.querySelector("#sluiten");

menu.addEventListener("click", function () {
	menuInhoud.classList.add("show");
});

sluitKnop = document.querySelector("click", function () {
	menuInhoud.classList.remove("show");
});


//ik geef de ids en classes een variabel en koppel ze aan de juiste id/class/elemet etc. zodra ik op show click oftewel de hamburger zorgt dat ervoor dat er dat de class word toegevoegd en je het menu ziet. Zodra je op sluiten klikt zorgt hij ervoor dat de class word removed.
//bronnen:https://www.youtube.com/watch?v=cUXcVWHhsJs, https://www.w3schools.com/howto/howto_js_mobile_navbar.asp, https://codepen.io/shooft/pen/wvGyvRQ, https://javascript.markkamsma.nl/hoofdstuk_7.php
