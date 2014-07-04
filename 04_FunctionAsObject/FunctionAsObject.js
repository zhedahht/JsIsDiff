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

    // Constructor properties as static variables
    (function() {
        function Account(name) {  
            this.name = name;  
            this.id = Account.nextId++;  
        }  
          
        Account.nextId = 100;  
          
        Account.prototype.toString = function() {  
            return "Name is: " + this.name + "; id is: " + this.id + ".";  
        }  
          
        var accountA = new Account("Harry");  
        var accountB = new Account("Peter");  
          
        console.log(accountA.toString()); // Name is: Harry; id is: 100. 
        console.log(accountB.toString()); // Name is: Peter; id is: 101.
    })();

    // Constructor properties as static methods
    (function() {
        function Complex(real, imaginary) {
            this.r = real; 
            this.i = imaginary; 
        } 

        Complex.prototype.add = function(that) {
            return new Complex(this.r + that.r, this.i + that.i);
        };

        Complex.prototype.toString = function() {
            return "{" + this.r + ", " + this.i + "}";
        };

        Complex.parse = function(s) {
            try {
                var m = Complex._format.exec(s); 
                return new Complex(parseFloat(m[1]), parseFloat(m[2]));
            } 
            catch (x) { 
                throw new TypeError("Can't parse \"" + s + "\" as a complex number.");
            }
        };
        Complex._format = /^\{([^,]+),([^}]+)\}$/;

        var complex1 = Complex.parse("{1, 2}");
        var complex2 = Complex.parse("{5, 3}");
        var result = complex1.add(complex2);
        console.log(result.toString()); // {6, 5}
    })();
});

