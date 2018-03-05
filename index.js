const express = require('express');

var runeApi = require('runescape-api');

const config = require('./config/core/main');

const postgresql = require('pg');

const updater = require('./updater');

const app = express();

// Start the server
const server = app.listen(config.port);

console.log('Your server is running on port ' + config.port + '.');

app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/:username', function(req, res){
    var client = new postgresql.Client(config.database);
    client.connect();
    runeApi.osrs.hiscores.player(req.params.username).then( function (data) {
        var skills = data.skills

        console.log(data.skills);
        updater(data, req.params.username, client);
        res.send(data.skills);
    })
    .catch(function (error) {
        console.error(error);
        res.send(error)
    });
});

/*
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
*/
