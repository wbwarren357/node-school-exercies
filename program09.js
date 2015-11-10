var http = require("http");

var allData1 = '';
var allData2 = '';
var allData3 = '';

var allDone = 0;

http.get(process.argv[2], function(response1) {
    response1.on('data', function(data1) {
        allData1 += data1.toString();
    });
    response1.on('error', function(err) {
        console.log(err);
        throw err;
    });
    response1.on('end', function() {
        allDone += 1;
        // console.log('1 is done');
        if (allDone == 3) {
            // console.log('all done');
            console.log(allData1);
            console.log(allData2);
            console.log(allData3);
        }
    });
});

http.get(process.argv[3], function(response2) {
    response2.on('data', function(data2) {
        allData2 += data2.toString();
    });
    response2.on('error', function(err) {
        console.log(err);
        throw err;
    });
    response2.on('end', function() {
        allDone += 1;
        //console.log('2 is done');
        if (allDone == 3) {
            // console.log('all done');
            console.log(allData1);
            console.log(allData2);
            console.log(allData3);
        }
    });
});

http.get(process.argv[4], function(response3) {
    response3.on('data', function(data3) {
        allData3 += data3.toString();
    });
    response3.on('error', function(err) {
        console.log(err);
        throw err;
    });
    response3.on('end', function() {
        allDone += 1;
        // console.log('3 is done');
        if (allDone == 3) {
            // console.log('all done');
            console.log(allData1);
            console.log(allData2);
            console.log(allData3);
        }
    });
});
