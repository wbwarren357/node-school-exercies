var q = require('q');


var defer1 = q.defer(),
    defer2 = q.defer();

var value1;

defer1.promise.then(
    function(val){
        value1 = val;);

// function myAll(promise1, promise2) {
//     var myDefer = q.defer(),
//         myCounter = 0,
//         value1 = "",
//         value2 = ""

//     promise1
//         .then(function(myValue) {
//             myCounter += 1;
//             if (myCounter == 2) {
//                 value1 = myValue;
//                 myDefer.resolve([value1, value2]);
//             }
//         })
//         .then(null, myDefer.reject());

//     promise2
//         .then(function(myValue) {
//             myCounter += 1;
//             if (myCounter == 2) {
//                 value2 = myValue;
//                 myDefer.resolve([value1, value2]);
//             }
//         })
//         .then(null, myDefer.reject());

// console.log("here");
//     return (myDefer.promise);
// }

// myAll(defer1.promise, defer2.promise)
//     .then(console.log);

// q.all([defer1, defer2])
//     .then(console.log);
    
// setTimeout(
//     function(myDefer1, myDefer2) {
//         myDefer1.resolve("PROMISES");
//         myDefer2.resolve("FTW");
//     }, 
//     200, 
//     defer1, defer2
// );

defer1.resolve("doodah");
console.log(value);

console.log('here');
