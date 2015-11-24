"use strict";


// include the Lo-Dash library
var _ = require("lodash");

// test data
var testData =
    [ { article: 1, quantity: 4 },
      { article: 2, quantity: 2 },
      { article: 1, quantity: 5 } ];

// power constructor
function powerConstructer() {

    var reducer = function(toReduce) {
          
        var allArticlesTotaled = [];

        // group the orders by article number
        var groupedOrders = _.groupBy(toReduce, "article");
        
        // for each article
        _.forEach(groupedOrders, function (orderGroup, num) {
            var articleTotaled = { "article": Number(num), "total_orders": 0};  

            _.reduce( 
                orderGroup,
                function(articleTotaled, anOrder) {
                    articleTotaled["total_orders"] += anOrder["quantity"];
                    return articleTotaled;
                },
                articleTotaled
            );
            
            allArticlesTotaled.push(articleTotaled);
        });
        
        return( _.sortBy(
                    allArticlesTotaled,
                    function(anArticleTotaled) {
                        return(anArticleTotaled["total_orders"]);
                    }
                ).reverse());
        
    };

    return (reducer);
}

// Create the worker function
var worker = powerConstructer();


// Test
// console.log(worker(testData));


// export the worker function as a nodejs module
module.exports = worker;
