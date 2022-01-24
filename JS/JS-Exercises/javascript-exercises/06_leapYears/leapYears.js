const leapYears = function(InputYear) {

    // Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

    // > Leap years are years divisible by four (like 1984 and 2004). 
    //However, years divisible by 100 are not leap years (such as 1800 and 1900)
    //unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
    // (Yes, it's all pretty confusing)

    // leapYears(2000) // is a leap year: returns true 
    // leapYears(1985) // is not a leap year: returns false

    // all 0 is leap  true

let Nfirst = InputYear % 4;
let Nsecond = InputYear % 100 ;
let Nthird = InputYear % 400 ;

if (((Nfirst = 0) && (Nsecond = 0)) && (Nthird = 0)) {return false;} else {return true;}




};

// Do not edit below this line
module.exports = leapYears;
