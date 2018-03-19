const express = require('express');
const config = require('./config/core/main');

const PlayerRouter = require('./routes/player.route');

const app = express();

// Start the server
const server = app.listen(config.port);

console.log('Your server is running on port ' + config.port + '.');

app.get('/', function (req, res) {
    res.send('hello world');
});

app.use(function (req, res, next) {

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});


app.use('/player', PlayerRouter);
