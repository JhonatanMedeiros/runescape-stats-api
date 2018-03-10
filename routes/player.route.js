const router = require('express').Router();
const runeApi = require('runescape-api');
const updater = require('../updater');


router.get('/search/:username', (req, res) => {

    runeApi.osrs.hiscores.player(req.params.username)
        .then((data) => {

            var skills = data.skills;

            updater.logInfo(data, req.params.username)
                .then(data => {
                    console.log(data);
                    res.send(data.skills);
                })
                .catch(error => {
                    console.log(error);
                    res.status(500);
                    res.send({'SQL Error:': error})
                });

        })
        .catch((error) => {
            console.error(error);
            res.send(error)
        });
});

module.exports = router;