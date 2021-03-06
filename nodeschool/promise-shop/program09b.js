var q = require('q');

/* ==============
 Now let's try using q.
=============*/

var defer1 = q.defer();
var defer2 = q.defer();


// function myAll(defer1) {
    var myCounter = 0;
    var myResult1 = '';
    var myResult2 = '';
    var myDefer = q.defer();
    
    defer1.promise
        .then(function(value1){
            myCounter += 1;
            myResult1 = value1;
            console.log("defer1 myCounter = ", myCounter);
            console.log("defer1 value = ", [ myResult1, myResult2 ]);
            if(myCounter == 2) {
                myDefer.resolve([ myResult1, myResult2 ]);
            }
        })
        // .then(null, function() {myDefer.reject()});
        
    defer2.promise
        .then(function(value2){
            myCounter += 1;
            myResult2 = value2;
            console.log("defer2 myCounter = ", myCounter)
            console.log("defer2 value = ", [ myResult1, myResult2 ]);
            if(myCounter == 2) {
                myDefer.resolve([ myResult1, myResult2 ]);
            }
        })
        // .then(null, function() {myDefer.reject()});
   
//     return(myDefer.promise);
// }

// myAll(defer1).then(console.log);

q.all([defer1.promise, defer2.promise]).then(console.log);

setTimeout(
    function() {
        defer2.resolve("FTW");
        defer1.resolve("PROMISES");
    },
    200);
