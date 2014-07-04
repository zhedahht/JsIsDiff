$(document).ready(function () {

    // function assigned to a variable 
    (function() {
        var add = function(a, b) {
            return a + b;
        };
        
        console.log(add(1, 2)); // 3
    })();
    
    // functions as parameters
    (function() {
        var calculate = function(operator, a, b) {
            return operator(a, b);
        };
        
        var add = function(a, b) {
            return a + b;
        };
        
        console.log(calculate(add, 2, 5)); // 7
    })();

    // callback functions
    (function() {
        var sum = function(nums) {
            var total = 0;
            nums.forEach(function(num) {
                total += num;
            });
            
            return total;
        };
        
        var nums = [1, 2, 3, 4];
        console.log(sum(nums)); // 10
    })();

    // functions as return values
    (function() {
        var doubleFunc = function(a) {
            return function() {
                return a + a;
            }
        };
        
        var func = doubleFunc(3);
        console.log(typeof(func)) // function
        console.log(func()); // 6
    })();

    // functions have their own properties
    (function() {
        test.counter = 0;
        function test() {
            test.counter++;
            console.log(test.counter);
        }

        test(); // 1
        test(); // 2
        test(); // 3
    })();

    // functions as Array objects
    (function() {
        function fibonacci(n) {
            if(fibonacci[n - 2] === undefined) {
                fibonacci[n - 2] = fibonacci(n - 2);
            }

            if(fibonacci[n - 1] === undefined) {
                fibonacci[n - 1] = fibonacci(n - 1);
            }

            return fibonacci[n - 1] + fibonacci[n - 2];
        }

        fibonacci[0] = 0;
        fibonacci[1] = 1;

        console.log(fibonacci(10)); // 55
        console.log(fibonacci(50)); // 12586269025
    })();
});

