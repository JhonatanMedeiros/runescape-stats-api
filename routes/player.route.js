const router = require('express').Router();
const runeApi = require('runescape-api');
const postgresql = require('pg');
const Promise = require('promise');
const updater = require('../updater');

const config = require('../config/core/main');


router.get('/search/:username', function (req, res) {
    var client = new postgresql.Client(config.database);
    client.connect();
    runeApi.osrs.hiscores.player(req.params.username)
        .then(function (data) {
            var skills = data.skills;
            updater.logInfo(data, req.params.username, client);
            res.send(data.skills);
        })
        .catch(function (error) {
            console.error(error);
            res.send(error)
        });
});

module.exports = router;