'use strict';
const postgresql = require('pg');
const config = require('./config/core/main');

const Promise = require('promise');

function logInfo(info, username) {

    var skills = info.skills;


    return new Promise((resolve, reject) => {

        var client = new postgresql.Client(config.database);
        client.connect((err) => {
            if (err) {
                reject(err.message)

            }
        });

        client.query("INSERT INTO users (username) VALUES('" + username + "') RETURNING id", function (err, result, fields) {
            let iduser = null;
            let lastcheck = new Date();
            let flagNewStats = false;

            if (err) {
                reject(err.message)
            } else {

                if (result == void (0)) {
                    client.query("select * from stats where username in (select id from users where username='" + username + "')", (err, result, fields) => {

                        if (err) {
                            reject(err.message)
                        } else {

                            if (result.rows != void (0)) {
                                flagNewStats = true;
                                iduser = result.rows[0].username;
                                lastcheck = result.rows[0].checkdate;
                            } else {
                                client.query("select * from users where username='" + username + "'", (err, result, fields) => {

                                    if (err) {
                                        reject(err.message);
                                    } else {
                                        iduser = result.rows[0].id;
                                    }


                                })
                            }
                        }

                    });

                    setTimeout(() =>{
                        client.query("update users set last_search=DEFAULT where username='" + username + "'", (err, result, fields) => {
                        })
                    }, 500);

                } else {
                    iduser = result.rows[0].id;
                }

                setTimeout(() => { // 1 second callback
                    if (flagNewStats == false || lastcheck.getDay() != new Date().getDay() || lastcheck.getMonth() != new Date().getMonth()) {
                        client.query("INSERT INTO stats (username, overallrank, overalllevel, overallxp, attackrank, attacklevel, attackxp, defencerank, defencelevel, defencexp, strengthrank, \
                    strengthlevel, strengthxp, hitpointsrank, hitpointslevel, hitpointsxp, rangedrank, rangedlevel, rangedxp, prayerrank, prayerlevel, prayerxp, magicrank, magiclevel, magicxp, \
                    cookingrank, cookinglevel, cookingxp, woodcuttingrank, woodcuttinglevel, woodcuttingxp, fletchingrank, fletchinglevel, fletchingxp, fishingrank, fishinglevel, fishingxp, \
                    firemakingrank, firemakinglevel, firemakingxp, craftingrank, craftinglevel, craftingxp, smithingrank, smithinglevel, smithingxp, miningrank, mininglevel, miningxp, herblorerank, \
                    herblorelevel, herblorexp, agilityrank, agilitylevel, agilityxp, thievingrank, thievinglevel, thievingxp, slayerrank, slayerlevel, slayerxp, farmingrank, farminglevel, \
                    farmingxp, runecraftrank, runecraftlevel, runecraftxp, hunterrank, hunterlevel, hunterxp, constructionrank, constructionlevel, constructionxp) VALUES (" + iduser + ", "
                            + skills.overall.rank + ", " + skills.overall.level + ", " + skills.overall.exp + ", " + skills.attack.rank + ", " + skills.attack.level + ", " + skills.attack.exp
                            + ", " + skills.defence.rank + ", " + skills.defence.level + ", " + skills.defence.exp + ", " + skills.strength.rank + ", " + skills.strength.level + ", "
                            + skills.strength.exp + ", " + skills.hitpoints.rank + ", " + skills.hitpoints.level + ", " + skills.hitpoints.exp + ", " + skills.ranged.rank + ", "
                            + skills.ranged.level + ", " + skills.ranged.exp + ", " + skills.prayer.rank + ", " + skills.prayer.level + ", " + skills.prayer.exp + ", " + skills.magic.rank
                            + ", " + skills.magic.level + ", " + skills.magic.exp + ", " + skills.cooking.rank + ", " + skills.cooking.level + ", " + skills.cooking.exp + ", "
                            + skills.woodcutting.rank + ", " + skills.woodcutting.level + ", " + skills.woodcutting.exp + ", " + skills.fletching.rank + ", " + skills.fletching.level
                            + ", " + skills.fletching.exp + ", " + skills.fishing.rank + ", " + skills.fishing.level + ", " + skills.fishing.exp + ", " + skills.firemaking.rank
                            + ", " + skills.firemaking.level + ", " + skills.firemaking.exp + ", " + skills.crafting.rank + ", " + skills.crafting.level + ", " + skills.crafting.exp + ", "
                            + skills.smithing.rank + ", " + skills.smithing.level + ", " + skills.smithing.exp + ", " + skills.mining.rank + ", " + skills.mining.level + ", " + skills.mining.exp
                            + ", " + skills.herblore.rank + ", " + skills.herblore.level + ", " + skills.herblore.exp + ", " + skills.agility.rank + ", " + skills.agility.level + ", "
                            + skills.agility.exp + ", " + skills.thieving.rank + ", " + skills.thieving.level + ", " + skills.thieving.exp + ", " + skills.slayer.rank + ", "
                            + skills.slayer.level + ", " + skills.slayer.exp + ", " + skills.farming.rank + ", " + skills.farming.level + ", " + skills.farming.exp + ", "
                            + skills.runecrafting.rank + ", " + skills.runecrafting.level + ", " + skills.runecrafting.exp + ", " + skills.hunter.rank + ", " + skills.hunter.level + ", "
                            + skills.hunter.exp + ", " + skills.construction.rank + ", " + skills.construction.level + ", " + skills.construction.exp + ")", (err, result, fields) => {
                            console.log("Inserting " + username + "\'s into the tracker log.");

                            if (err) {
                                reject(err.message);
                            } else {
                                resolve(result);
                            }

                            client.end();
                        })

                    } else {

                        client.query("update stats set overallrank='" + skills.overall.rank + "', overalllevel='" + skills.overall.level + "', overallxp='" + skills.overall.exp + "', \
                attackrank='" + skills.attack.rank + "', attacklevel='" + skills.attack.level + "', attackxp='" + skills.attack.exp + "', defencerank='" + skills.defence.rank + "', \
                defencelevel='" + skills.defence.level + "', defencexp='" + skills.defence.exp + "', strengthrank='" + skills.strength.rank + "', strengthlevel='" + skills.strength.level + "', \
                strengthxp='" + skills.strength.exp + "', hitpointsrank='" + skills.hitpoints.rank + "', hitpointslevel='" + skills.hitpoints.level + "', hitpointsxp='" + skills.hitpoints.exp + "', \
                rangedrank='" + skills.ranged.rank + "', rangedlevel='" + skills.ranged.level + "', rangedxp='" + skills.ranged.exp + "', prayerrank='" + skills.prayer.rank + "', \
                prayerlevel='" + skills.prayer.level + "', prayerxp='" + skills.prayer.exp + "', magicrank='" + skills.magic.rank + "', magiclevel='" + skills.magic.level + "', \
                magicxp='" + skills.magic.exp + "', cookingrank='" + skills.cooking.rank + "',cookinglevel=' " + skills.cooking.level + "', cookingxp='" + skills.cooking.exp + "', \
                woodcuttingrank='" + skills.woodcutting.rank + "', woodcuttinglevel='" + skills.woodcutting.level + "', woodcuttingxp='" + skills.woodcutting.exp + "', \
                fletchingrank='" + skills.fletching.rank + "', fletchinglevel='" + skills.fletching.level + "', fletchingxp='" + skills.fletching.exp + "', \
                fishingrank='" + skills.fishing.rank + "', fishinglevel='" + skills.fishing.level + "', fishingxp='" + skills.fishing.exp + "', firemakingrank='" + skills.firemaking.rank + "', \
                firemakinglevel='" + skills.firemaking.level + "', firemakingxp='" + skills.firemaking.exp + "', craftingrank='" + skills.crafting.rank + "', \
                craftinglevel='" + skills.crafting.level + "', craftingxp='" + skills.crafting.exp + "', smithingrank='" + skills.smithing.rank + "', smithinglevel='" + skills.smithing.level + "', \
                smithingxp='" + skills.smithing.exp + "', miningrank='" + skills.mining.rank + "', mininglevel='" + skills.mining.level + "', miningxp='" + skills.mining.exp + "', \
                herblorerank='" + skills.herblore.rank + "', herblorelevel='" + skills.herblore.level + "', herblorexp='" + skills.herblore.exp + "', agilityrank='" + skills.agility.rank + "', \
                agilitylevel='" + skills.agility.level + "', agilityxp='" + skills.agility.exp + "', thievingrank='" + skills.thieving.rank + "', thievinglevel='" + skills.thieving.level + "', \
                thievingxp='" + skills.thieving.exp + "', slayerrank='" + skills.slayer.rank + "', slayerlevel='" + skills.slayer.level + "', slayerxp='" + skills.slayer.exp + "', \
                farmingrank='" + skills.farming.rank + "', farminglevel='" + skills.farming.level + "', farmingxp='" + skills.farming.exp + "', runecraftrank='" + skills.runecrafting.rank + "', \
                runecraftlevel='" + skills.runecrafting.level + "', runecraftxp='" + skills.runecrafting.exp + "', hunterrank='" + skills.hunter.rank + "', \
                hunterlevel='" + skills.hunter.level + "', hunterxp='" + skills.hunter.exp + "', constructionrank='" + skills.construction.rank + "', \
                constructionlevel='" + skills.construction.level + "', constructionxp='" + skills.construction.exp + " checkdate=" + new Date() + "' WHERE username=" + iduser + ";", (err, result, fields) => {
                            console.log("Updating " + username + "\'s tracker log.");
                            if (err) {
                                reject(err.message);
                            } else {
                                resolve(result);
                            }
                            client.end();
                        })
                    }
                }, 1000);
            }


        });

    });


}

function lookFor(username, connection) {

    connection.query("select id from users where username='" + username + "'", (err, res) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log(res.rows);
            return JSON.stringify(res.rows[0]);
        }
    })


}

module.exports.logInfo = logInfo;
module.exports.lookFor = lookFor;