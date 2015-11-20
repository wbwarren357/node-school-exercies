var qhttp = require('q-io/http');
var stream = require('stream');

var astream = new stream();
console.log("s = " + astream.readable);

var myRequest = {
        url: 'http://localhost:7000/',
        method : 'GET'
    };
var myNormRequest = qhttp.normalizeRequest(myRequest);
console.log(myNormRequest);

qhttp.request(myNormRequest)
.then(function(myBuf) {
    var myStream = astream.make(
        (
            qhttp.normalizeResponse(myBuf.toString()).body
        )
    );
    console.log(myStream.head());
})
.then(null, console.error);
