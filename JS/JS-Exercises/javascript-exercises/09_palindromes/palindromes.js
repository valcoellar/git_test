const palindromes = function () {
        // palindromes
        // ## some palindromes:
        //  - A car, a man, a maraca.
        //  - Rats live on no evil star.
        //  - Lid off a daffodil.
        //  - Animal loots foliated detail of stool lamina.
        // - A nut for a jar of tuna.
       
       // 1-normalize data
       // (all to lowcase)
       // (quit all spaces) <<< Result string  //and , . 
       // 2-mirror all string
       // 3-compare S_ResultString with S_MirrorString
       // return boolean true or false
       
       let S_string = arguments[0].toLowerCase();
       let S_ResultString = S_string.replace(/\s/g, '');
       S_ResultString = S_ResultString.replace(/[^a-z]+/g, "");
       let S_MirrorString = S_ResultString.split("").reverse().join("");
       
       if (S_ResultString === S_MirrorString) {
         let Bol_Resutl = true;
       return Bol_Resutl;
       } else {
         let Bol_Resutl = false;
       return Bol_Resutl;
       } 
        
         // End Function 
        
};

// Do not edit below this line
module.exports = palindromes;
