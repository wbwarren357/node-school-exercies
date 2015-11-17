var q = require('q');


function throwMyGod() {
    var myError = new Error("OH NOES");
    throw(myError);
}

function iterate(myNum) {
    console.log(myNum);
    return ++myNum;
}

q.fcall(iterate, 1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(throwMyGod)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log)
    