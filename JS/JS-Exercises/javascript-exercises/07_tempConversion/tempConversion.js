const ftoc = function(Itemperature) {
  // Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
  //```
  //ftoc(32) // fahrenheit to celsius, should return 0
  //ctof(0) // celsius to fahrenheit, should return 32
  //```

// (32 °F − 32) × 5/9 = 0 °C

let Result_Temp = ((Itemperature - 32) * 5/9);
Result_Temp = Math.round(Result_Temp * 10) / 10;

return Result_Temp;
};

const ctof = function(Itemperature) {
// (0 °C × 9/5) + 32 = 32 °F

let Result_Temp = ((Itemperature * 9/5) + 32);
Result_Temp = Math.round(Result_Temp * 10) / 10;

return Result_Temp;


};




// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
