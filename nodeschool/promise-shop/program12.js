 var qhttp = require('q-io/http')
        , _ = require('lodash')
        , cachePath = "http://localhost:7000/"
        , dbPath = "http://localhost:7001/";
    
    //   var buildDbPath = _.bind(String.prototype.concat, dbPath);
    
    //   qhttp.read(cachePath)
    //   .then(_.compose(qhttp.read, buildDbPath))
    //   .then(_.compose(console.log, JSON.parse))
    //   .then(null, console.error)
    //   .done();

var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

var youngest = _.chain(users)
  .sortBy('age')
  .map(function(chr) {
    return chr.user + ' is ' + chr.age;
  })
  .value();
//  .first()
//  .value();

console.log(youngest);
