var http = require("http");

var allData1 = '';
var allData2 = '';
var allData3 = '';

http.get(process.argv[2], function(response) {
    response.on('data', function(data) {
        allData1 += data.toString();
    });
    response.on('error', function(err){
        console.log(err);
        throw err;
    });
    response.on('end', function() {
    });
});

http.get(process.argv[3], function(response) {
    response.on('data', function(data) {
        allData2 += data.toString();
    });
    response.on('error', function(err){
        console.log(err);
        throw err;
    });
    response.on('end', function() {
    });
});

http.get(process.argv[4], function(response) {
    response.on('data', function(data) {
        allData3 += data.toString();
    });
    response.on('error', function(err){
        console.log(err);
        throw err;
    });
    response.on('end', function() {
        console.log(allData1);
        console.log(allData2);
        console.log(allData3);
    });
});