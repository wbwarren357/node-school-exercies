var qhttp = require('q-io/http');

qhttp.read("http://localhost:1337")
.then(
    function(myValue) {
        console.log(JSON.parse(myValue));
    }
).then(null, console.error);
