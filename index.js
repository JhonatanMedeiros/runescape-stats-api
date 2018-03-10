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


app.use('/player', PlayerRouter);
