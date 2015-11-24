"use strict";


// include the Lo-Dash library
var _ = require("lodash");


var testComments = [
        { username: "tim", comment: "you are doing a great job!" },
        { username: "tim", comment: "when you have new workshoppers?" },
        { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
        { username: "max", comment: "where have you been on friday? we missed you!" },
        { username: "max", comment: "You don't answer anymore - why?" },
        { username: "cat_lover", comment: "MORE cats!!!" },
        { username: "max", comment: "i really love your site" }
    ];

// power constructor
function powerConstructer() {

    var returnFunc = function (myComments) {
        var returnArray = [];
        var groupedComments = _.groupBy(myComments, 'username');
        var myKeys = Object.keys(groupedComments);
        
        for (var key in myKeys) {
            var newObj = {};
            newObj["username"] = myKeys[key];
            newObj["comment_count"] = _.size(groupedComments[myKeys[key]]);
            returnArray.push(newObj);
        }
        
        return(_.chain(returnArray)
        .sortBy(function (item) {
            return(-item.comment_count);
        })
        .value());
    };
    
    return(returnFunc);
}

// Create the worker function
var worker = powerConstructer();


// Test
//console.log(worker(testComments));


// export the worker function as a nodejs module
module.exports = worker;


