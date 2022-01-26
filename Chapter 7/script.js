var playerOne = 1;
var playerTwo = 1;

function someFunction(){
var x = Math.random();
playerOne = Math.round(6*x) +1;
playerTwo = Math.round(6*x) +1;
 }
 window.onload = someFunction();
 
if(playerOne > playerTwo) {
    document.querySelector("h1").innerHTML = "Player One Wins!";
}
if(playerOne < playerTwo) {
    document.querySelector("h1").innerHTML = "Player Two Wins!";
}
if(playerOne = 1){
    document.getElementsByClassName("dice")[0].src = "images/dice1.png";
}
if(playerOne = 2){
    document.getElementsByClassName("dice")[0].src = "images/dice2.png";
}
if(playerOne = 3){
    document.getElementsByClassName("dice")[0].src = "images/dice3.png";
}
if(playerOne = 4){
    document.getElementsByClassName("dice")[0].src = "images/dice4.png";
}
if(playerOne = 5){
    document.getElementsByClassName("dice")[0].src = "images/dice5.png";
}
if(playerOne = 6){
    document.getElementsByClassName("dice")[0].src = "images/dice6.png";
}
if(playerTwo = 1){
    document.getElementsByClassName("dice")[0].src = "images/dice1.png";
}
if(playerTwo = 2){
    document.getElementsByClassName("dice")[0].src = "images/dice2.png";
}
if(playerTwo = 3){
    document.getElementsByClassName("dice")[0].src = "images/dice3.png";
}
if(playerTwo = 4){
    document.getElementsByClassName("dice")[0].src = "images/dice4.png";
}
if(playerTwo = 5){
    document.getElementsByClassName("dice")[0].src = "images/dice5.png";
}
if(playerTwo = 6){
    document.getElementsByClassName("dice")[0].src = "images/dice6.png";
}


