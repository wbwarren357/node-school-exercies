'use strict';

// include the Lo-Dash library
var _ = require("lodash");

var cities = 
    { Hamburg:    { population: 1.698 },
      Strasbourg: { population: 0.272 },
      Rome:       { population: 2.753 },
      Dublin:     { population: 0.528 } };
      
var popRanges = 
    { City1: {population: 1.58, size: 'big'  },
      City2: {population: 0.58, size: 'med'  },
      City3: {population: 0.28, size: 'small'} };

var worker = function(myCities) {
    return( 
        _.forEach(
            myCities,
            function(item1) {
                item1.size = 'big';
                var sp = _.sortByOrder(popRanges, ['population'], ['desc']);
                _.forEach(
                    sp, 
                    function(item2) {
                        if(item1.population < item2.population) {
                            item1.size = item2.size;
                        }
                    }
                );
            }
        )
    );
};

console.log(worker(cities));

// export the worker function as a nodejs module
module.exports = worker;


