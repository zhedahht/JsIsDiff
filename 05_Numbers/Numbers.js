$(document).ready(function () {

    // Integers and floats are all numbers
    (function() {
        var intValue = 2;
        var floatValue = 3.6;
        
        console.log(typeof(intValue)); // number
        console.log(typeof(floatValue)); // number
    })();
    
    // Big data
    (function() {
        var bigNumber = Math.pow(2, 100);
        console.log(bigNumber); // 1125899906842624
    })();

    // Overflow
    (function() {
        try
        {
            var tooBig = Math.pow(10, 400);
            console.log("Finish without error. The returned value is:", tooBig);
        }
        catch(e)
        {
            console.log("A error was caught.");
        }
        
        // Output:
        // Finish without error. The returned value is: Infinity
    })();

    // Divide numbers by 0
    (function() {
        var result1 = 1 / 0;
        var result2 = -1 / 0;

        console.log(result1); // Infinity
        console.log(result2); // -Infinity
    })();

    // NaN
    (function() {
        var result1 = 0 / 0;
        console.log(result1); // NaN

        var result2 = 5 / "hello";
        console.log(result2); // NaN
    })();
});

