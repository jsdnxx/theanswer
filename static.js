var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 5555;

var server = http.createServer();

server.on('request', function (req, res) {
  fs.createReadStream('index.html')
  .pipe(res);
});

server.listen(port);