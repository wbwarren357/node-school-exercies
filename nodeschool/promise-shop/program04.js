var q = require('q');

var deferred = q.defer();


deferred.promise.then(console.log, console.log);

deferred.resolve("SECOND");

console.log("FIRST");


