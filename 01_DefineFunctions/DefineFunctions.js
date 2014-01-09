$(document).ready(function () {
    (function() {
        function helloWorld() {
            console.log("Hello world.");
        }
        
        helloWorld();
        
        // Output:
        // Hello world.
    })();

    (function() {
        var helloWorld = function () {
            console.log("Hello world.");
        }
        
        helloWorld();
        
        // Output:
        // Hello world.
    })();
    
    (function() {
        helloWorld();
 
        function helloWorld() {
            console.log("Hello world.");
        }
        
        // Output:
        // Hello world.
    })();
    
    (function() {
        /*
        helloWorld(); // TypeError: undefined is not a function

        var helloWorld = function () {
            console.log("Hello world.");
        }
        */
    })();
    
    (function() {
        (function() {
            console.log("Hello world.");
        })();
        
        // Output:
        // Hello world.
    })();
});

