var q = require('q');

var deferred = q.defer();

function printError(err) {
  console.log(err.message);
}

deferred.promise.then(console.log, printError);
setTimeout(deferred.reject, 300, new Error("REJECTED!"));
