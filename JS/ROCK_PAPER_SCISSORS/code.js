

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




//  const container = document.querySelector('#container');

// const content = document.createElement('div');
//		content.classList.add('content');
//		content.textContent = 'This is the glorious text-content!';

//	container.appendChild(content);



// init game 
game();



