const express = require('express');

const pg = require('pg');

const config = require('./config/core/main');

const app = express();

var client = new pg.Client(config.database);

// Start the server
const server = app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');

app.get('/', function(req, res) {
    res.send('hello world');
});


client.connect(function(err) {
    if (err) {
        return console.error('could not connect to postgresql',err);
    }
    var query = "CREATE TABLE TEST (id serial primary key, name varchar(255));";
    client.query(query, function(err, result) {
        if (err) {
            return console.error("could not complete query", err);
        }
        client.end();
        console.log(result);

    });
});