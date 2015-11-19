var q = require('q');

/* ==============
 Now let's try using q.
=============*/

var defer1 = q.defer();
var defer2 = q.defer();


// function all(defer1, defer2) {
//     var deferred = q.defer();
//     console.log("Starting one's setTimeout");

//     setTimeout(
//         function() {
            
//         // Again, this is where you want to call the next function
// 	    // in the list if there is one.
//             console.log('Finished with one. Ready to call next.');
//             deferred.resolve();
//         },
//         100
//     );
//     console.log('ones timeout is set');
//     // The deferred object has a "promise" member,
//     // which has a "then" function
//     return deferred.promise;
// }


function myAll(defer1) {
    var myCounter = 0;
    var myResult1 = '';
    var myResult2 = '';
    var myDefer = q.defer();
    
    defer1.promise
        .then(function(value1){
            myCounter += 1;
            myResult1 = value1;
            // console.log("defer1 myCounter = ", myCounter);
            // console.log("defer1 value = ", [ myResult1, myResult2 ]);
            if(myCounter == 2) {
                myDefer.resolve([ myResult1, myResult2 ]);
            }
        })
        .then(null, function() {myDefer.reject()});
        
    defer2.promise
        .then(function(value2){
            myCounter += 1;
            myResult2 = value2;
            // console.log("defer2 myCounter = ", myCounter)
            // console.log("defer2 value = ", [ myResult1, myResult2 ]);
            if(myCounter == 2) {
                myDefer.resolve([ myResult1, myResult2 ]);
            }
        })
        .then(null, function() {myDefer.reject()});
;
   
    return(myDefer.promise);
}

myAll(defer1).then(console.log);

setTimeout(
    function() {
        defer2.resolve("FTW");
        defer1.resolve("PROMISES");
    },
    200);
