'use strict'

// include the Lo-Dash library
var _ = require("lodash");

var testData = [{
    id: 22,
    username: "martin",
    active: true
}, {
    id: 23,
    username: "max",
    active: false
}, {
    id: 24,
    username: "linda",
    active: false
}];

var worker = function( myList ) {
    return _.where(myList, {"active" : true});
};

console.log(worker(testData));

// export the worker function as a nodejs module
module.exports = worker;
