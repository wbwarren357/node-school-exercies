'use strict';

// include the Lo-Dash library
var _ = require("lodash");

var testWords = ['Test', 'Hello', 'World', 'Node', 'JavaScript'];

var worker = function(words) {
    return( 
        _.chain(words)
        .map(function(word) {
            return word.toUpperCase() + 'CHAINED';
            }
        )
        .sort()
        .value()
    );

};

console.log(worker(testWords));

// export the worker function as a nodejs module
module.exports = worker;


