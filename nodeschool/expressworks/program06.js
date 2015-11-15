// libraries
var express = require('express');
var path = require('path');
var crypto = require('crypto');



// use express
var app = express();


app.put('/message/:id', function(req, res) {
    console.log(req.params.id);
    var myHash = crypto
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex');
    console.log(myHash);
    
    res.send(myHash);
});

app.listen(process.argv[2]);
