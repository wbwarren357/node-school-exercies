    var spawn = require('child_process').spawn;
    var duplexer2 = require('duplexer2');


   module.exports = function(cmd, args) {
      var childCmd = spawn(cmd, args);
      var myDuplex = duplexer2(childCmd.stdin, childCmd.stdout);

      return(myDuplex);
    };

