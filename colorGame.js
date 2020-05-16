var colors = generateRandomColor(6);
var pickedColor = pickColor();

var colorDisplay = document.querySelector("span");
var messageDisplay = document.querySelector("#message")
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var easy = false;


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColor(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		if (colors[i]) {
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = "none";
		}

	}
	easy = true;
	document.querySelector("h1").style.backgroundColor = "steelblue";


});

hardBtn.addEventListener("click",function(){
	easy = false;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColor(6);
	pickedColor = pickColor();
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = "block";
	};
	document.querySelector("h1").style.backgroundColor = "steelblue";


});
reset.addEventListener("click", function () {
	// body...
	if (easy == true) {
		colors = generateRandomColor(3);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for (var i = 0; i < square.length; i++) {
			if (colors[i]) {
				square[i].style.backgroundColor = colors[i];
			} else {
				square[i].style.display = "none";
			}
		}
	} else {
		colors = generateRandomColor(6);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for (var i = 0; i < square.length; i++) {
			square[i].style.backgroundColor = colors[i];
		}
	}

	document.querySelector("h1").style.backgroundColor = "steelblue";
	reset.textContent = "new color"

});
colorDisplay.textContent = pickedColor;
var square = document.querySelectorAll(".square");
for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click", function () {
		// body...
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "correct";
			changeColor(clickedColor);
			reset.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!!!";
		}
	})
	}



function changeColor(color) {
	// body...
	for (var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = color;
	};
	document.querySelector("h1").style.backgroundColor = color;
};

function pickColor() {
	// body...
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColor(x) {
	// body...
	var arr = [];
	for(var i = 0; i < x; i++){
		arr.push(randomColor());
	};
	return arr;
};

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};