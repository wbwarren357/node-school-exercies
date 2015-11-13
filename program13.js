// myFirst HTTP Server.js 

//Lets require the needed modules
var http = require('http');
var url = require('url');
var json = require('json');

// assign a unique number to each request
var reqID = Number(0);

// create reqexs
var validPathname1 = /^\/api\/parsetime\?/i;
var validPathname2 = /^\/api\/unixtime\?/i;


// Define server, handler, and listen
var server = http.createServer(function(req, res) {
    // get a new reqID
    var thisReqID = 'ReqID-' + ++reqID;
    var returnedTime = {};

    // parse the url
    var parsedUrl = url.parse(req.url, true);

    // if not a GET, close connection
    if (req.method != 'GET') {
        console.log(thisReqID + ':  error - request not GET; request method = ' + req.method);
        res.end();
    }
    else if (parsedUrl.path.match(validPathname1) == null && parsedUrl.path.match(validPathname2) == null) {
        console.log(thisReqID + ':  error - wrong path; pathname = "' + parsedUrl.pathname + '"');
        res.end();
    }
    else {

        console.log(thisReqID + ':  client request received = "' + req.method + ':  ' + req.url + '"');
        console.log(url.parse(req.url, true));

        var queryDate = new Date;

        if ('iso' in parsedUrl.query) {
            // handle iostime request
            if (isNaN(Date.parse(parsedUrl.query.iso))) {
                res.end();
                console.log(thisReqID + ':  invalid datetime');
            }
            else if (parsedUrl.path.match(validPathname1) != null) {
                queryDate = new Date(Date.parse(parsedUrl.query.iso));
                returnedTime.hour = queryDate.getHours();
                returnedTime.minute = queryDate.getMinutes();
                returnedTime.second = queryDate.getSeconds();

                res.end(JSON.stringify(returnedTime));
            }
            else if (parsedUrl.path.match(validPathname2) != null) {
                queryDate = Date.parse(parsedUrl.query.iso);
                returnedTime.unixtime = Number(queryDate);
                res.end(JSON.stringify(returnedTime));
            }
            else { // Invalid request
                res.end();
                console.log(thisReqID + ':  Invalid query = ' + JSON.stringify(parsedUrl.query));
            }
        }
    }
    // all done
    if (returnedTime != {}) {
        console.log(thisReqID + ':  Finished - retured = ' + JSON.stringify(returnedTime));
    }
});

server.listen(Number(process.argv[2]), function() {
    console.log('server is listening');
});
