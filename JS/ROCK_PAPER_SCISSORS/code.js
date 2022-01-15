

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


console.log(computerPlay());


