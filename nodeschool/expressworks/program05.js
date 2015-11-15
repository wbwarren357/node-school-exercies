var express = require('express')
var path = require('path');
var stylus = require('stylus');


var app = express();

app.use(require('stylus').middleware(process.argv[3] || path.join(__dirname, 'public-05') ));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public-05')));

app.listen(process.argv[2]);
