// libraries
var express = require('express');
var path = require('path');
var crypto = require('crypto');
var url = require('url');
var json = require('json');
var fs = require('fs');


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
app.get('/search', function(req, res, next){
    console.log(req.url);
    var parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    var myResult = JSON.stringify(parsedUrl.query);
    console.log(myResult);
    res.end(myResult);
});
app.get('/books', function(req, res){
    var myFileName = process.argv[3] || path.join(__dirname, 'program08.json');
    console.log("myFileName = " + myFileName);
    var myFile = fs.readFileSync(myFileName);
    console.log('read = ' + myFile);
    console.log('after');
    var myFileAsJSON = JSON.parse(myFile);
    res.json(myFileAsJSON);
});

app.listen(process.argv[2]);
