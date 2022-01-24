const sumAll = function(Nstart, Nend) {
    // Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
    // expect(sumAll(1, 4)).toEqual(10);

if (Nstart > Nend) {  // swapping the honey !
                    let temp = Nstart;
                        Nstart = Nend;
                        Nend = temp;
                    }

 if ((Nstart < 0) || (Nend < 0)) {return "ERROR";} // negatives
 if ((typeof Nstart != "number") || (typeof Nend != "number")) {return "ERROR";} // non numbers parms
 
    let Nresult = 0;
        for (let i = Nstart; i <= Nend; i++){
            Nresult = Nresult + i;
                                            }

    return Nresult;
    
};

// Do not edit below this line
module.exports = sumAll;
