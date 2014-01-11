$(document).ready(function () {
    (function() {
        function greeting(name, greetingWord) {
            if (greetingWord === undefined) {
                greetingWord = "Hi";
            }
            
            console.log(greetingWord + ", " + name);
        }
        
        greeting("Harry", "Hello"); // Hello, Harry 
        greeting("Peter"); // Hi, Peter
    })();

    (function() {
        function add() {
            var sum = 0;
            for(var i = 0; i < arguments.length; ++i) {
                sum += arguments[i];
            }
            
            return sum;
        }
        
        console.log(add(1, 2, 3)); // 6
        console.log(add(1, 2, 3, 4)) // 10
    })();
    
    (function() {
        var threeToPowerOfTen = (function (exponent) {
            if (exponent === 1) {
                return 3;
            }
            return 3 * arguments.callee(exponent - 1);
        })(10);
        
        console.log(threeToPowerOfTen); // 59049 
    })();
    
    (function() {
        function power(base, exponent) {
            if (exponent == 1) {
                return base
            }
        
            return base * power(base, exponent - 1);
        }
        
        console.log(power(2, 3)); // 8
    })();
    /*
    (function() {
        function power(base, exponent) {
            if (exponent == 1) {
                return base
            }
        
            return base * power(base, exponent - 1);
        }
        
        var realPower = power;
        
        power = "More power, more powerful";
        
        console.log(realPower(2, 3));
        
        // Result:
        // TypeError: string is not a function
    })();
    */
    (function() {
        function power(base, exponent) {
            if (exponent == 1) {
                return base
            }
        
            return base * arguments.callee(base, exponent - 1);
        }
        
        var realPower = power;
        
        power = "More power, more powerful";
        
        console.log(realPower(2, 3)); // 8
    })();
});

