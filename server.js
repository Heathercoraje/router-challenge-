var http = require('http');
var port = process.env.port || 4000;
var router = require('./router.js');
var app = function (req, res) {
  router(req, res);
};

http.createServer(app).listen(port);
console.log('server is running', port);
