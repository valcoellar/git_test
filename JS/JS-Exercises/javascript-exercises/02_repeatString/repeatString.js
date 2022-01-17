const repeatString = function(cString, Nnum) {
// This function will take two arguments, `string` and `num`.
let Srepeats = ""
for (let i = 0; i < Nnum; i++){
Srepeats = Srepeats +cString;
}

return Srepeats;

};

// Do not edit below this line
module.exports = repeatString;
