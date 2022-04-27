const fibonacci = function() {
    
        // test('4th fibonacci number is 3', () => {
        //    expect(fibonacci(4)).toBe(3);
        //  test.skip('6th fibonacci number is 8', () => {
        //    expect(fibonacci(6)).toBe(8);
        //  test.skip('10th fibonacci number is 55', () => {
        //    expect(fibonacci(10)).toBe(55);
        //  test.skip('15th fibonacci number is 610', () => {
        //    expect(fibonacci(15)).toBe(610);
        //  test.skip('25th fibonacci number is 75025', () => {
        //    expect(fibonacci(25)).toBe(75025);
        //  test.skip('doesn\'t accept negatives', () => {
        //    expect(fibonacci(-25)).toBe("OOPS");
        //  test.skip('DOES accept strings', () => {
        //    expect(fibonacci("1")).toBe(1);
        //  test.skip('DOES accept strings', () => {
        //    expect(fibonacci("2")).toBe(1);
        //  test.skip('DOES accept strings', () => {
        //    expect(fibonacci("8")).toBe(21);
         // The simplest is the series 1, 1, 2, 3, 5, 8,
         
        // return the fibonacci sequence
        let I_input = 50; // numbers to be generated
        let N_Arguments = parseInt(arguments[0]);
        
        var N_Base = [];  
        N_Base[0] = 0;
        N_Base[1] = 1;
        
        for (var i = 2; i < I_input; i++) {
          N_Base[i] = N_Base[i - 2] + N_Base[i - 1];
        }
         if (N_Base[N_Arguments] > 0) { 
        return N_Base[N_Arguments]; 
        } else { return "OOPS"; } 
        
// End Function        

};

// Do not edit below this line
module.exports = fibonacci;
