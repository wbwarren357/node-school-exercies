"use strict";


// include the Lo-Dash library
var _ = require("lodash");

// test data
var testData =
    { name: "Foo",
      login: [ 1407574431, 140753421 ]
    };

// power constructor
function powerConstructer() {

    var simpleTemp = function(toProcess) {
        
        var compiled = _.template('Hello <%= name %> (logins: <% print(_.size(login)) %>)');
        var output = compiled(toProcess);
        
        return(output);
    };

    return (simpleTemp);
}

// Create the worker function
var worker = powerConstructer();


// Test
//console.log(worker(testData));


// export the worker function as a nodejs module
module.exports = worker;
