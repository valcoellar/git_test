const removeFromArray = function([BaseArray], [ItemToRemove]) {
// Implement a function that takes an array and some other arguments then removes the other arguments from that array:

// ```javascript
//removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
//```

function DelItems() {
    BaseArray = BaseArray.filter(Item => Item != ItemToRemove);
};

ItemToRemove.forEach(DelItems);

return BaseArray;



};

// Do not edit below this line
module.exports = removeFromArray;
