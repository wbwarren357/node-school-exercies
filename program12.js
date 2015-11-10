// myFirst HTTP Server.js 

//Lets require the needed modules
var http = require('http');
var strftime = require('strftime');
var fs = require('fs');

//Lets define a port we want to listen to
const PORT = 8080;

// Define server, handler, and listen
var server = http.createServer(function(req, res) {
    console.log('client connected with Path = "' + req.url + '"');
    res.on('finish', function() {
       console.log('request all done');
    });
    var fileRes = fs.createReadStream(process.argv[2]);
    fileRes.pipe(res);
});

server.listen(8080, function() {
    console.log('server is listening');
});
