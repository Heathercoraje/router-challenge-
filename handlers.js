var handlers = module.exports = {};
var data = require('./repos.json');
var fs = require('fs');

var headers = {
  'content-type' : 'text/html'
}

handlers.home = function (req, res) {
  console.log(__dirname.concat('public/fac.html'));
  fs.readFile(__dirname.concat('/public/fac.html'), 'utf8', (err, file) => {
    if (err) {
      res.writeHead(500, headers);
      res.end('Server Error');
    } else {
      res.writeHead(200, headers);
      res.end(file);
    }
  });
}

handlers.notFound = function (req, res) {
  res.writeHead(404, headers);
  res.end('Resouce not found');
}
