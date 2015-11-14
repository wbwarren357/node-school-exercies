function foo() {
    var bar = 1;
    function zip() {
        var quux = 2;
        bar = true;
    }
    quux = 3;
    return(zip);
}
