var express = require('express');
var favicon = require('serve-favicon');
var path    = require('path');
var pug     = require('pug');

// Instantiate server components
const server = new express();
const router = express.Router();

// Set view engine
server.set('views', path.join(__dirname, 'src'));
server.set('view engine', 'pug');

// Set static + favicon paths
var static_dir = path.join(__dirname, 'static');
server.use(express.static(static_dir));
server.use(favicon(path.join(static_dir, 'images', 'favicon.ico')));

// Apply request middleware
server.disable('x-powered-by');

// Handle routing
router.get('/', function(req, res) {
  res.status(200).render('construction');
});

router.get('/v1', function(req, res) {
  res.status(200).render('index');
});

server.use(router);

// Start the server
var port = process.env.PORT || 8080;
var serverInstance = server.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    var mode = server.settings.env;
    console.info('App listening on port %s in %s mode', port, mode);
  }
});

module.exports = { 'default': serverInstance };