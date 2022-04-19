const add = function() {

  if (arguments.length === 2){

    if ((arguments[0] && arguments[1] ) === 0) { 
            var ADD_result = 0;
            return ADD_result;
                    }  else {
            var ADD_result = (arguments[0] + arguments[1] );
            return ADD_result;
                            }
             
                                                };
  
// ------------------------------------------
                                                  }




const subtract = function() {
	
  if (arguments.length === 2){

    if ((arguments[0] && arguments[1] ) === 0) { 
            var ADD_result = 0;
            return ADD_result;
                    }  else {
            var ADD_result = (arguments[0] - arguments[1] );
            return ADD_result;
                            }
             
                                                };

};

const sum = function() {
  //computes the sum of an empty array
  let args = arguments.valueOf();
  let S_args = args[0].toString();
  let N_args = parseInt(S_args);
  if (isNaN(N_args)) N_args = 0;
  return N_args ;  
  	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
