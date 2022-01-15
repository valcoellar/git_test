

function computerPlay () {
// function called computerPlay that will randomly 
// return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
// We’ll use this function in the game to make the computer’s play.
 let cPlay = " "   
 let dice =  Math.floor(Math.random() *  3 ) + 1; 
switch (dice){
    case 1:
        cPlay = "Rock";
    break;
    case 2:
        cPlay = "Paper";
    break;
    case 3:
        cPlay = "Scissors";
    break;
}
return cPlay; 
};

let playerSelection = prompt("1=Rock  2= Paper 3= Scissors")

function Round (playerSelection, computerSelection){
// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters 
// - the playerSelection and computerSelection 
// - and then return a string that declares the winner 
// of the round like so: "You Lose! Paper beats Rock"



};




// console.log(computerPlay());


