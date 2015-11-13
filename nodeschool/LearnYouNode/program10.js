// myFirst TCP Server.js and write the following code into it:

//Lets require/import the HTTP module
var net = require('net');
var strftime = require('strftime');

//Lets define a port we want to listen to
const PORT = 8080; 

// Define server, handler, and listen
var server = net.createServer(function(connection) { 
   console.log('client connected');
   connection.on('end', function() {
      console.log('client disconnected');
   });
   connection.write(strftime('%Y-%m-%d %H:%M:%S') + '\n');
   connection.pipe(connection);
});
server.listen(8080, function() { 
  console.log('server is listening');
});
