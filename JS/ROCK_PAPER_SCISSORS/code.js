// function called computerPlay that will randomly 
// return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
// We’ll use this function in the game to make the computer’s play.

function computerPlay () {
 let cPlay = ""   
 let dice =  Math.floor(Math.random() *  3 ) + 1; 

if (dice = 1 ) {cPlay = "Rock"}
if (dice = 2 ) {cPlay = "Paper"}
if (dice = 3 ) {cPlay = "Scissors"}

        
return cPlay; 

};


console.log(computerPlay());

