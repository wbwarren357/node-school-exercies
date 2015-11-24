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

    var commentcount = function (comments) {
    
        var counted = [];
    
        // Group by username
        comments = _.groupBy(comments, "username");
    
        _.forEach(comments, function (item, name) {
    
            counted.push({
                username: name,
                comment_count: _.size(item)
            });
        });
    
        return (_.sortBy(counted, "comment_count").reverse());
        // alternative with a sorted function
        // return _.sortBy(counted, function(comment) { return -comment.comment_count; });
    };
    
    return(commentcount);
}

// Create the worker function
var worker = powerConstructer();


// Test
//console.log(worker(testComments));


// export the worker function as a nodejs module
module.exports = worker;


