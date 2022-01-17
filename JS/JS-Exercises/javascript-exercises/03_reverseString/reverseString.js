const reverseString = function(str) {
// Pretty simple, write a function called `reverseString` that returns its input, reversed!
// reverseString('hello there') // returns 'ereht olleh'


let CountChars = str.length;
let ReversedString = "";

for (let i = CountChars ; i > 0; i--){
    ReversedString = ReversedString +  str.charAt(i-1);         
}

return ReversedString;
};

// Do not edit below this line
module.exports = reverseString;
