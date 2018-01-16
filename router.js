var handlers = require('./handlers');

var routes = {
  '/'  : handlers.read,
  '/workshop':handlers.read,
  '/project':handlers.read,
  '/stylesheet.css': handlers.read,
  '/js/index.js': handlers.read,
  '/js/request.js': handlers.read,
  '/api/repos/workshop': handlers.api,
  '/api/repos/project': handlers.api,
  '404': handlers.notFound
};

module.exports = function (req, res) {
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    routes[404](req, res);
  }
};
