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
    
    (function() {
        var Singleton = (function() {
            function SingletonClass() {
            }
            
            var instance = new SingletonClass();
            
            return {
                getInstance: function() {
                    return instance;
                }
            };
        })();

        var instance1 = Singleton.getInstance();
        var instance2 = Singleton.getInstance();
        console.log(instance1 === instance2);

        // Output:
        // ture
    })();
});

