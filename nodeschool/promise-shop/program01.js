var q = require('q');


var deferred = q.defer();
deferred.promise.then(console.log);

setTimeout(
    deferred.resolve,
    3000,
    "RESOLVED!"
);


