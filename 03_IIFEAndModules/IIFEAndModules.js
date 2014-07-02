$(document).ready(function () {
    (function() {
        var count = 0;
        
        function print() {
            console.log(count);
        }
        
        function increase() {
            count++;
        }
    })();
    
    (function() {
        var module = new Object({
            count: 0,
        
            print: function() {
                console.log(this.count);
            },
            
            increase: function() {
                this.count++;
            }
        });
        
        module.count = 5;
        module.increase();
        module.print(); // 6
    })();

    (function() {
        var module = function() {
            var count = 0;
            
            var print = function() {
                console.log(count);
            };
            
            var increase = function() {
                count++;
            };
            
            return {
                print: print,
                increase: increase
            };
        }();
            
        module.count = 5; 
        module.increase();
        module.print(); // 1
    })();
});

