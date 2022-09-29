var secHand = document.querySelector("#sec-hand");

var minHand = document.querySelector("#min-hand");

var hourHand = document.querySelector("#hour-hand");

function setDate()
{
	var now = new Date();

	var sec = now.getSeconds();
	var secDegrees = ((sec/60)*360) + 90;
	secHand.style.transform = `rotate(${secDegrees}deg)`;

	var min = now.getMinutes();
	var minDegrees = ((min/60)*360 + 90);
	minHand.style.transform = `rotate(${minDegrees}deg)`;

	var hour = now.getHours();
	var hourDegrees = ((hour/12)*360 + 90);
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;	
}

setInterval(setDate, 1000);