

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


function Round (playerSelection, computerSelection){
// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters 
// - the playerSelection and computerSelection 
// - and then return a string that declares the winner 
// of the round like so: "You Lose! Paper beats Rock"
let Pselects = "";
let PlayerPoint = 0;

switch (playerSelection){
    case "1":
        Pselects = "Rock";
    break;
    case "2":
        Pselects = "Paper";
    break;
    case "3":
        Pselects = "Scissors";
    break;
}

console.log(`player choose: ${Pselects}`);
console.log(`computer choose: ${computerSelection}` );

// ------ Draw game ------
if (Pselects == computerSelection){console.log("Draw Game!!"); PlayerPoint = 3; };
// -----------------------

// --- Player Wins
// Paper beats Rock
if (Pselects == "Paper" && computerSelection == "Rock"){console.log("You win!! Paper beats Rock !"); PlayerPoint = 1; };
// Rock beats Scissors
if (Pselects == "Rock" && computerSelection == "Scissors"){console.log("You win!! Rock beats Scissors !"); PlayerPoint = 1; };
// Scissors beats Paper
if (Pselects == "Scissors" && computerSelection == "Paper"){console.log("You win!! Scissors beats Paper !"); PlayerPoint = 1; };

// --- Computer Wins
// Paper beats Rock
if (Pselects == "Rock" && computerSelection == "Paper"){console.log("You Lose!! Paper beats Rock !"); PlayerPoint = 0;};
// Rock beats Scissors
if (Pselects == "Scissors" && computerSelection == "Rock"){console.log("You Lose!! Rock beats Scissors !"); PlayerPoint = 0;};
// Scissors beats Paper
if (Pselects == "Paper" && computerSelection == "Scissors"){console.log("You win!! Scissors beats Paper !"); PlayerPoint = 0;};


return PlayerPoint;
};


// function game() {

// Write a NEW function called game().
// Use the previous function inside of this one to play
// a 5 round game that keeps score and reports a winner or loser at the end.

// Round function returns the player points 
// Returns 3 in a Draw Round.

//let PlayerScore = 0;
//let ComputerScore =0;
//let winner = 0;

//for (let pass = 0; pass < 5; pass++){
//        let playerSelection = prompt("1=Rock  2= Paper 3= Scissors")
//        winner = Round (playerSelection,computerPlay());
       
//       if (winner == 1) {PlayerScore++;}
//       if (winner == 0) {ComputerScore++;}
//       } 

//console.log(`Player Score  ${PlayerScore}`);
//console.log(`Computer Score  ${ComputerScore}`);

//};

// init game 
game();



