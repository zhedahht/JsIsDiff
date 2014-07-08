$(document).ready(function () {

    // No differences between characters and strings
    (function() {
        var character = 'a';
        var string = "abcdefg";
        
        console.log(typeof(character)); // string
        console.log(typeof(string)); // string
    })();
    
    // " and '
    (function() {
        var str1 = "I can't wait to learn Javascript.";
        var str2 = 'He said: "Javascript is so good".';

        console.log(str1); // I can't wait to learn Javascript.
        console.log(str2); // He said: "Javascript is so good".
    })();

    // Strings in multiple lines
    (function() {
        var str = "<div> \
        Learning Javascript \
        </div>";

        console.log(str); // <div> Learning Javascript </div>
    })();

    // Immutable strings
    (function() {
        var str = "hello";
        console.log(str[1]); // e
        
        str[3] = 'a';
        console.log(str[1]); // e
    })();

    // Immutable strings
    (function() {
        var str1 = "hello";
        var str2 = str1.replace("h", "H");

        console.log(str1); // hello
        console.log(str2); // Hello
    })();
});

