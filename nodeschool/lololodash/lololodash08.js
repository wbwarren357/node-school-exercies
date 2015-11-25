"use strict";


// include the Lo-Dash library
var _ = require("lodash");

// test data
var testData =
    [ { name: "mike",  income: 2563 },
      { name: "kim",   income: 1587 },
      { name: "liz",   income: 3541 },
      { name: "tom",   income: 2475 },
      { name: "bello", income: 987  },
      { name: "frank", income: 2975 } ];

// power constructor
function powerConstructer() {

    var analyzer = function(toAnalyze) {
          
        var totalInc = 0;
        var aveInc = 0;
        
        _.forEach(toAnalyze, function(person) {
            totalInc += person["income"];
        });
        aveInc = (totalInc / _.size(toAnalyze));
        
        var underPerf = _.filter(toAnalyze, function(personRec) {
            return(personRec.income <= aveInc);
        });
        
        underPerf = _.sortBy(underPerf, function(personRec) {
            return(personRec.income);
        });
        
        var overPerf = _.filter(toAnalyze, function(personRec) {
            return(personRec.income > aveInc);
        });
        
        overPerf = _.sortBy(overPerf, function(personRec) {
            return(personRec.income);
        });
        
        return(
            { "average": aveInc,
              "underperform": underPerf,
              "overperform": overPerf }
            );
    };

    return (analyzer);
}

// Create the worker function
var worker = powerConstructer();


// Test
//console.log(worker(testData));


// export the worker function as a nodejs module
module.exports = worker;
