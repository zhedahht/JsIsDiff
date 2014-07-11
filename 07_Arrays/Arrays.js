$(document).ready(function () {

    // Elements in an array in different types
    (function() {
        var array1 = new Array();
        array1[0] = "a";
        array1[1] = 1;
        array1[2] = true;

        console.log(array1); // ["a", 1, true]
    })();
    
    // Concise way to construct an array
    (function() {
        var array2 = ["a", 1, true];

        console.log(array2); // ["a", 1, true]
    })();

    // Variable length
    (function() {
        var array = [0, 1];
        array[4] = 4;

        console.log("length:", array.length); // length: 5
        for(var index = 0; index < array.length; ++index) {
            console.log(index + ":", array[index]);
        }
        
        // Output:
        // 0: 0
        // 1: 1
        // 2: undefined
        // 3: undefined
        // 4: 4

        for(index in array) {
            console.log(index + ":", array[index]);
        }
        
        // Output:
        // 0: 0
        // 1: 1
        // 4: 4
    })();

    // Some array functionalities
    (function() {
        var array1 = [1, 2];
        var array2 = [4, 3, 2];
        var array3 = [5, 6];

        var array4 = array1.concat(array2, array3);
        console.log(array4); // [1, 2, 4, 3, 2, 5, 6] 

        var index1 = array4.indexOf(2);      
        var index2 = array4.lastIndexOf(2);  
        console.log(index1); // 1
        console.log(index2); // 4

        var str = array4.join("; ");
        console.log(str); // 1; 2; 4; 3; 2; 5; 6

        var array5 = array4.slice(2, 5);
        console.log(array5); // [4, 3, 2]

        array4.sort();
        console.log(array4); // [1, 2, 2, 3, 4, 5, 6]
    })();

    // Sort an array in alphabetical order
    (function() {
        var array = [4, 20, 10, 7];
        array.sort();
        console.log(array); // [10,20,4,7]
    })();

    // Sort an array in numeric order
    (function() {
        var array = [4, 20, 10, 7];

        function compare(a, b) {
            return a - b;
        }

        array.sort(compare);
        console.log(array); // 4,7, 10, 20
    })();

    // Arrays as stacks
    (function() {
        var stack = [1, 2];

        stack.push(3); // [1, 2, 3] 
        console.log(stack);

        stack.push(4); // [1, 2, 3, 4]
        console.log(stack);

        console.log(stack.pop()); // 4
        console.log(stack.pop()); // 3
        console.log(stack); // [1, 2] 
    })();

    (function() {
        var array = [1, 2];

        array.unshift(3);
        console.log(array); // [3, 1, 2]

        array.unshift(4);
        console.log(array); // [4, 3, 1, 2]

        console.log(array.shift()); // 4
        console.log(array.shift()); // 3
        console.log(array); // [1, 2]
    })();

    // Arrays as queues
    (function() {
        var queue = [1, 2];

        queue.push(3); // [1, 2, 3] 
        console.log(queue);

        queue.push(4); // [1, 2, 3, 4]
        console.log(queue);

        console.log(queue.shift()); // 1
        console.log(queue.shift()); // 2
        console.log(queue); // [3, 4] 
    })();
    
    // Delete elements in an array
    (function() {
        var array1 = [1, 2, 3, 4, 5, 6, 7];
        array1.splice(3, 2);
        console.log(array1); // [1, 2, 3, 6, 7]

        var array2 = [1, 2, 3, 4, 5, 6, 7];
        array2.splice(-3, 2);
        console.log(array2); // [1, 2, 3, 4, 7]
    })();

    // Replace elements in an array
    (function() {
        var array1 = [1, 2, 3, 4, 5];
        array1.splice(2, 2, -1);
        console.log(array1); // [1, 2, -1, 5]

        var array2 = [1, 2, 3, 4, 5];
        array2.splice(2, 2, -1, -2);
        console.log(array2); // [1, 2, -1, -2, 5]

        var array3 = [1, 2, 3, 4, 5];
        array3.splice(2, 2, -1, -2, -3);
        console.log(array3); // [1, 2, -1, -2, -3, 5]
    })();

    // Add elements in an array
    (function() {
        var array = [1, 2, 3, 4, 5];
        array.splice(2, 0, -1, -2);
        console.log(array); // [1, 2, -1, -2, 3, 4, 5] 
    })();
});

