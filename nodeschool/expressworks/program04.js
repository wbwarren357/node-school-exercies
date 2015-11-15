// libraries
var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');



// use express
var app = express();


// express configuration
app.set('view engine', 'jade');
app.set('views', process.argv[3] || path.join(__dirname, 'templates-04'));
   

app.use(bodyparser.urlencoded({extended: false}));


app.get('/form', function(req, res) {
    res.render('index');
});
app.post('/form', function(req, res){
    res.end(req.body.str.split('').reverse().join(''));
});


app.listen(process.argv[2]);
