var playerone = Math.round(Math.random() * 6) + 1;
var playertwo = Math.round(Math.random() * 6) + 1;

function butTon() {
	var nameOne = prompt("Player One Name: ");
	var nameTwo = prompt("Player Two Name: ");

	document.querySelectorAll("p")[0].innerHTML = nameOne;
	document.querySelectorAll("p")[1].innerHTML = nameTwo;

	document.querySelector(".img1").src = "images/dice" + playerone + ".png";
	document.querySelector(".img2").src = "images/dice" + playertwo + ".png";

    if (playerone > playertwo) {
		document.querySelector("h1").innerHTML = nameOne + " wins!";
	} else if (playerone < playertwo) {
		document.querySelector("h1").innerHTML = nameTwo + " wins!";
	} else {
		document.querySelector("h1").innerHTML = "Draw!";
	}
}
