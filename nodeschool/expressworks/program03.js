var express = require('express')

var app = express()

app.get('/home', function(req, res) {
  res.end(new Date.toDateString());
});

app.listen(process.argv[2]);
