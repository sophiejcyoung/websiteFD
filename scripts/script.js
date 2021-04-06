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

//bronnen:https://www.youtube.com/watch?v=cUXcVWHhsJs, https://www.w3schools.com/howto/howto_js_mobile_navbar.asp, https://codepen.io/shooft/pen/wvGyvRQ, https://javascript.markkamsma.nl/hoofdstuk_7.php
