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
  // computes the sum of an array of two numbers
  // computes the sum of an array of many numbers
  // computes the sum of an array of many numbers
 
      let args = arguments.valueOf();
      let S_args = args[0].toString();
          
      if (S_args.length < 2) {
        let N_args = parseInt(S_args);
        if (isNaN(N_args)) N_args = 0;
        return N_args ;  
                             }
      
      
      if (S_args.length > 1) {
      
      let R_sum = 0;
    
    Object.entries(arguments).forEach(([key, value]) => {
       //key[0]  value[0]
          for (var i = 0; i < value.length; i++) {
          R_sum = R_sum + value[i];}   
                                                          });
             return R_sum;
         											}
      

  
};

const multiply = function() {
  // multiplies two numbers
  // multiplies several numbers
  let args = arguments.valueOf();
  let S_args = args[0].toString();
      
  if (S_args.length < 2) {
    let N_args = parseInt(S_args);
    if (isNaN(N_args)) N_args = 0;
    return N_args ;  
                         }
  
  
  if (S_args.length > 2) {
  
  let R_sum = 1

Object.entries(arguments).forEach(([key, value]) => {
   //key[0]  value[0]
   
      for (var i = 0; i < value.length; i++) {
      R_sum *= value[i];}   
                                                      });
         return R_sum;
                           }
  // End Function 

};

const power = function() {
	let N_Base = parseInt(arguments[0]);
 	let N_Exponent = parseInt(arguments[1]);
 
 	return N_Base ** N_Exponent;
  // End Function 
};

const factorial = function() {

	let n = parseInt(arguments[0]);
 	var total = 1; 

 	for (i=1; i<=n; i++) {
  		total = total * i; 
 	}
 return total; 

  // End Function 
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
