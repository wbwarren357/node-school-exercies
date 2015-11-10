var http = require("http");

// http.get("http://www.google.com/index.html", function(res) {
//   console.log("Got response: " + res.statusCode);
//   console.log(res.setEncoding("utf8"));
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });

// count the number of data chunks
var numDataChunks = 0;

// issue the get request
http.get("http://www.ibm.com", function(response) {
        console.log("here");
    }
).on("data", function(data) {
    console.log(data.setEncoding("utf8"));
    numDataChunks += 1;
}).on("error", function(err) {
    console.log(err);
}).on("end", function() {
    console.log("got end");
});

// Total number of chunks
console.log("Number of data chunks = " + numDataChunks);
