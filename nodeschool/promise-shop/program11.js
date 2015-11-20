var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
    .then(function(id) {
        // console.log("id = " + id);
        return qhttp.read("http://localhost:7001/" + id);
    })
    .then(function(json) {
        // console.log("raw json = " + json);
        console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done();
