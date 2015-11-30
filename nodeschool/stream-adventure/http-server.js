var http = require('http');
var through2 = require('through2');


var server = http.createServer(function(req, res) {
        if (req.method.toUpperCase() === 'POST') {
            req.pipe(through2(function (body, enc, next) {
                this.push(body.toString().toUpperCase());
            }))
            .pipe(res);
        }
        else res.end('send a POST request');
});
server.listen(process.argv[2]);
