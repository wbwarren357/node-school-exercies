'use strict';

// include the Lo-Dash library
var _ = require("lodash");

var cities = 
    { Hamburg:   [14,15,16,14,18,17,20,22,21,18,19,23],
      Munich:    [16,17,19,20,21,23,22,21,20,19,24,23],
      Madrid:    [24,23,20,24,24,23,21,22,24,20,24,22],
      Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
      Warsaw:    [17,15,16,18,20,20,21,18,19,18,17,20] };
      
var criticalTemp = 19;


var worker = function(myCities) {
    var citiesCats = { warm: [], hot: [] };
    _.forEach(
        myCities,
        function(temps, key) {
            if(_.every(temps, function(temp) {return temp >= criticalTemp;})) {
                citiesCats.hot.push(key);
                //console.log('hot', key);
            } else if(_.some(temps, function(temp) {return temp >= criticalTemp;})) {
                citiesCats.warm.push(key);
                //console.log('warm', key);
            } else {
                //console.log('cool', key);
            }
        }
    );
    return(citiesCats);
};

//console.log(worker(cities));

// export the worker function as a nodejs module
module.exports = worker;


