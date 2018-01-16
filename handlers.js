var handlers = module.exports = {};
var data = require('./src/repos.json');
var fs = require('fs');

var headers = {
  '/'              : 'text/html',
  '/workshop'      : 'text/html',
  '/project'       : 'text/html',
  '/stylesheet.css': 'text/css',
  '/js/request.js' : 'text/javascript',
  '/js/index.js'   : 'text/javascript'
}
var path = {
  '/'              : '/public/workshop.html',
  '/workshop'      : '/public/workshop.html',
  '/project'       : '/public/project.html',
  '/stylesheet.css': '/public/stylesheet.css',
  '/js/request.js' : '/public/js/request.js',
  '/js/index.js'   : '/public/js/index.js'
}

handlers.read = function (req, res) {
    fs.readFile(__dirname.concat(path[req.url]), 'utf8', (err, file) => {
    if (err) {
      res.writeHead(500, {'content-type': 'text/html'});
      res.end('Server Error');
    } else {
      res.writeHead(200, {'content-type': `${headers[req.url]}`});
      res.end(file);
      console.log('file reading success');
    }
  });
}

handlers.api = function(req, res) {
  var name = req.url.split('/')[3];
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify(data[name]));
}

handlers.notFound = function (req, res) {
  res.writeHead(404, headers);
  res.end('Resouce not found');
}
