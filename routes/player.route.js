const router = require('express').Router();
const runeApi = require('runescape-api');
const updater = require('../updater');


router.get('/search/:username', (req, res) => {

  runeApi.osrs.hiscores.player(req.params.username)
    .then((data) => {

      var skills = data.skills;
      res.status(200).send(skills);

      //TODO Método abaixo é relacioado a consulta ao banco de dados
      // updater.logInfo(data, req.params.username)
      //   .then(data => {
      //     console.log(data);
      //     res.send(data.skills);
      //   })
      //   .catch(error => {
      //     res.status(500);
      //     res.send({'SQL Error:': error});
      //   });

    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

module.exports = router;