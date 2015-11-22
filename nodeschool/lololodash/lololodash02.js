'use strict'

// include the Lo-Dash library
var _ = require("lodash");

var testData = [{ article: 41,   quantity: 24 },
     { article: 2323, quantity: 2  },
     { article: 655,  quantity: 23 }];

var worker = function( myList ) {
    return _.sortByOrder(myList, ['quantity'], ['desc']);
};

console.log(worker(testData));

// export the worker function as a nodejs module
module.exports = worker;


