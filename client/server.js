/*eslint-disable no-console, func-names, no-var */
var bodyParser = require('body-parser');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot.config');
var sleep = require('sleep');

var exercises = [{value: 1}];

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  stats: {colors: true}
});

server.app.use(bodyParser.json(null));
server.app.use(bodyParser.urlencoded({extended: true}));

server.app.get('/exercises.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(exercises));
});

server.app.post('/exercises.json', function(req, res) {
  console.log('Processing exercise: %j', req.body.exercise);
  console.log('(shhhh...napping 1 seconds)');
  sleep.sleep(1);
  console.log('Just got done with nap!');
  exercises.push(req.body.exercise);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(req.body.exercise));
});

server.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000...');
});
