var http = require("http");

var numChunks = 0;

http.get('http://www.google.com', function(response) {
    // Continuously update stream with data
    console.log("got status = "+ response.statusCode);
    var body = '';
    response.on('data', function(d) {
        numChunks += 1;
        body += "\n\nchunk #" + numChunks + "  ******************************\n" + d;
    });
    response.on('end', function() {
        // Data reception is done, do whatever with it!
        console.log("got end");
        console.log('numChunks = ' + numChunks);
        console.log(body.toString());
    });
});
