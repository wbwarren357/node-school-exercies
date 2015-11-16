var q = require('q');

function parsePromised(jsonString){
  var deferred = q.defer();
  var result;
  
  try {
    result = JSON.parse(jsonString);
    deferred.resolve(result);
  } catch (err) {
    deferred.reject(err);
  }
  return(deferred.promise);
}

parsePromised(process.argv[2])
  .then(console.log, console.log);
