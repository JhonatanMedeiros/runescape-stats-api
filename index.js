const express = require('express');

const pg = require('pg');

const config = require('./config/core/main');

const app = express();

var con = new pg.Client(config.database);

con.connect();

con.end();

// Start the server
const server = app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');



app.get('/', function(req, res) {
    res.send('hello world');
});