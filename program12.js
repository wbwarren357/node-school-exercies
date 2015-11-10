// myFirst HTTP Server.js 

//Lets require the needed modules
var http = require('http');
var t2m = require('through2-map');

// Define server, handler, and listen
var server = http.createServer(function(req, res) {
    var totalBytes = 0;
    
    res.on('finish', function() {
        console.log('request all done; processed ' + totalBytes + ' total bytes');
        totalBytes = 0;
    });

    // if not a POST, close connection
    if (req.method != 'POST') {
        console.log('request not POST; request = ' + req.method);
        res.end();
    }
    
    console.log('client request received = "' + req.method + ':  ' + req.url + '"');
    req.pipe(t2m(function(chunk) {
        var doodah = chunk.toString().toUpperCase();
        totalBytes += doodah.length;
        return doodah;
    })).pipe(res);
    
    console.log('done chunks');
});

server.listen(Number(process.argv[2]), function() {
    console.log('server is listening');
});
