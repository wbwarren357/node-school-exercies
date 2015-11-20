var qhttp = require('q-io/http');

var myRequest = {
        url: 'http://localhost:7000/',
        method : 'GET'
    };
var myNormRequest = qhttp.normalizeRequest(myRequest);
console.log(myNormRequest);

qhttp.request(myNormRequest)
.then(function(myBuf) {
    console.log(qhttp.normalizeResponse(myBuf));
})
.then(null, console.error);
