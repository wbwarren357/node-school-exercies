// myFirst HTTP Server.js 

//Lets require the needed modules
var http = require('http');
var strftime = require('strftime');
var fs = require('fs');

// Define server, handler, and listen
var server = http.createServer(function(req, res) {
    console.log('client connected with Path = "' + req.url + '"');
    res.on('finish', function() {
       console.log('request all done');
    });
    var fileRes = fs.createReadStream(process.argv[3]);
    fileRes.pipe(res);
});

server.listen(Number(process.argv[2]), function() {
    console.log('server is listening');
});
