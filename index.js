const express = require('express');

const pg = require('pg');
pg.defaults.ssl = true;

const config = require('./config/core/main');

const app = express();

var con = new pg.Client(config.database);

con.connect();
con.query("CREATE TABLE TEST (id serial primary key, name varchar(255));");
con.query("INSERT INTO TEST VALUES ('Nilton');")
con.query("SELECT * FROM TEST;")

// Start the server
const server = app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');

app.get('/', function(req, res) {
    res.send('hello world');
});