const removeFromArray = function(BaseArray, ItemToRemove) {
// Implement a function that takes an array and some other arguments then removes the other arguments from that array:

//removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
//removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);

//[Arguments] { '0': [ 1, 2, 3, 4 ], '1': 3, '2': 2 }


//for (let i = 0;i < ItemToRemove.lenght; i++) {
// BaseArray = BaseArray.filter(Item => Item != ItemToRemove);

for (let i = 1; arguments[i] != null;i++ ){
    BaseArray = BaseArray.filter(Item => Item != arguments[i]);
    console.log(arguments[i]);
}



// console.log(BaseArray + " --> " + ItemToRemove);
//};

return BaseArray;






};

// Do not edit below this line
module.exports = removeFromArray;
