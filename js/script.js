" use strict ";

var display = document.getElementById("display");

function string () {
	var num = "*** Output ***";
	for(var i = 1; i < 11; i++){
		num += "<br/>" + i;
	}
	display.innerHTML = num;
};


function odd() {
	var num = "*** Output ***";
	for(var i = 1; i < 20; i++){
		if(i % 2 != 0){
			num += "<br/>" + i;
		}
	}
	display.innerHTML = num;
};


function square() {
	var num = "*** Output ***";
	for(var i = 1; i < 11; i++){
		num += "<br/>" + i*i;
	}
	display.innerHTML = num;
};


function random() {
	var num = "*** Output ***";
	for(var i = 1; i <= 4; i++) {
		var ans = Math.floor((Math.random() * 10) + 1);;
		num += "<br/>" + ans;
	}
	display.innerHTML = num;
};


function even() {
	var numberLess = prompt("Enter a maximum number: ");
	var num = "*** Output ***";
	for(var i = numberLess - 1; i > 0; i--){
		if(i % 2 == 0){
			num += "<br/>" + i;
		}
	}
	display.innerHTML = num;
};


function powerOfTwo() {
	var powerUpTo = prompt("Enter an exponent: ");
	var num = "*** Output ***";
	for(var i = 1; i <= powerUpTo; i++){
		num += "<br/>" + Math.pow(2,i);
	}
	display.innerHTML = num;
};


function areWeThereYet() {
	var str = "***Output***";
	display.innerHTML = str;
	var thereYet = "";
	while(thereYet != "yes"){
		str += "<br/>Are we there yet?"
		thereYet = prompt("Are we there yet?");
		str += "<br/>" + thereYet;
		display.innerHTML = str;
	}
};


function triangle() {
	var num = "*** Output ***";
	for (var i=1; i<6; i++)
	{
		num += "<br/>";
		for (var j=0; j<i; j++)
		{
			num += "*";
		}
	}
	display.innerHTML = num;
};


function fourSquare () {
	var num = "*** Output ***";
	var square = [[],[],[],[]];
	for (var i = 0; i < square.length; i++) {
		num += "<br/> |  ";
		for (var j = 0; j < square.length; j++) {
			square[i][j] = ((j + 1) * (i + 1));
			if (square[i][j] > 9) {
				num += square[i][j] + " |  ";
			} else {
				num += square[i][j] + "  |  ";
			}
		}
	}
	display.innerHTML = num;
};


function anySquare () {
	num = "*** Output ***";
	var choice = prompt("Enter a number: ")
	var square = [];
	for(var i = 0; i <= choice; i++){
		square.push([]);
	}
	for (var i = 0; i < square.length; i++) {
		num += "<br/> |  ";
		for (var j = 0; j < square.length; j++) {
			square[i][j] = ((j + 1) * (i + 1));
			if (square[i][j] > 9) {
				num += square[i][j] + " |  ";
			} else {
				num += square[i][j] + "  |  ";
			}
		}
	}
	display.innerHTML = num;
};

