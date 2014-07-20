$(document).ready(function () {

    (function() {
        console.log("boolean");
        
        console.log(false == 0);   // true
        console.log(true == 1);    // true
        console.log(true == 3);    // false 

        console.log(false == "0"); // true
        console.log(true == "1");  // true
    })();
    
    (function() {
        console.log("\nstring");
        
        console.log("3" == 3);      // true  
        
        console.log("0" == false);  // true
        console.log("" == false);   // true
        console.log("1" == true);   // true
        console.log("2" == true);   // false
        console.log("2" == false);  // false
    })();

    (function() {
        console.log("\nstring in if");
        
        var valueFunction = function(name, str) {
            if(str) {
                console.log(name, "is true");
            }
            else {
                console.log(name, "is false");
            }
        }
        
        valueFunction("Empty string", "");  // Empty string is false
        valueFunction("0", "0");            // 0 is true
        valueFunction("1", "1");            // 1 is true
        valueFunction("2", "2");            // 2 is true
    })();

    (function() {
        console.log("\nnull and undefined");
        
        console.log(null == undefined);  // true  
        
        console.log(null == false);      // false
        console.log(undefined == false); // false
        console.log(null == 0);          // false
        console.log(undefined == 0);     // false
        console.log(null == '');         // false
    })();

    (function() {
        console.log("\nnull and undefined in if");
        
        var valueFunction = function(name, value) {
            if(value) {
                console.log(name, "is true");
            }
            else {
                console.log(name, "is false");
            }
        }
        
        valueFunction("undefined", undefined);
        valueFunction("null", null);

        // Output:
        // undefined is false
        // null is false
    })();

    (function() {
        console.log("\nNaN");
        
        console.log(NaN == 0);     // false  
        console.log(NaN == 'NaN'); // false  
        console.log(NaN == NaN);   // false 
    })();

    (function() {
        console.log("\nreference type");
        
        var a = "hello world";
        var b = new String("hello world");
        console.log(a == b); // true
    })();

    (function() {
        console.log("\ntwo instances of reference type");

        var a = [1, 2, 3];
        var b = [1, 2, 3];
        console.log(a == b); // false
    })();

    (function() {
        console.log("0" == 0);     // true
        console.log(0 == "");      // true
        console.log("0" == "");    // false
    })();

    (function() {
        console.log("\nno conversion with ===");
        console.log(false === 0);        // false
        console.log(true === 1);         // false
        console.log("3" === 3);          // false

        var a = "hello world";
        var b = new String("hello world");
        console.log(a === b);            // false

        console.log(null === undefined); // false
    })();

    (function() {
    })();
    
    (function() {
    })();

    (function() {
    })();

    (function() {
    })();
});

