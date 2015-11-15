// libraries
var express = require('express');
var path = require('path');


// use express
var app = express();


// express configuration
app.set('view engine', 'jade');
app.set('views', process.argv[3] || path.join(__dirname, 'templates-03'));
   
    
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
