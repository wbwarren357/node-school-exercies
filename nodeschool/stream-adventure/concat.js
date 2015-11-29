var concat = require('concat-stream');
var esrever = require('esrever');


process.stdin
    .pipe(concat(function(myInput) {
       console.log(esrever.reverse(myInput.toString()));
    }));
    