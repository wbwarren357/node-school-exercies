var through2 = require('through2');
var split = require('split');

var lineNum = 1;
process.stdin
    .pipe(split())
    .pipe(through2(function(line, _, next) {
        var myOutput = line.toString().toLowerCase() + '\n';
        if (lineNum++ % 2 === 0) {
            myOutput = myOutput.toUpperCase();
        }
        this.push(myOutput);
        next();
    }))
    .pipe(process.stdout);
