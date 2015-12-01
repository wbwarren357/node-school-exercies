var through = require('through2');
var duplexer2 = require('duplexer2');


var doodah = function(counter) {
  var counts = {};
  var input = through(write, end);
  return duplexer2(input, counter);

  function write(row, _, next) {
    counts[row.country] = (counts[row.country] || 0) + 1;
    next();
  }

  function end(done) {
    counter.setCounts(counts);
    done();
  }
};

module.exports = doodah;
