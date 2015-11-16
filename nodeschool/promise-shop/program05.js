var q = require('q');

var deferred = q.defer();

function attachTitle(aName){
  return('DR. ' + aName);
}

deferred.promise
  .then(attachTitle)
  .then(console.log);

deferred.resolve("MANHATTAN");
