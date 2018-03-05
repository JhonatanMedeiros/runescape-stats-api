'use strict';

const config = require('./config/core/main');

function logInfo(info, username, connection) {

    var skills = info.skills;
    
    connection.query("INSERT INTO stats (username, overallrank, overalllevel, overallxp, attackrank, attacklevel, attackxp, defencerank, defencelevel, defencexp, strengthrank, \
            strengthlevel, strengthxp, hitpointsrank, hitpointslevel, hitpointsxp, rangedrank, rangedlevel, rangedxp, prayerrank, prayerlevel, prayerxp, magicrank, magiclevel, magicxp, \
            cookingrank, cookinglevel, cookingxp, woodcuttingrank, woodcuttinglevel, woodcuttingxp, fletchingrank, fletchinglevel, fletchingxp, fishingrank, fishinglevel, fishingxp, \
            firemakingrank, firemakinglevel, firemakingxp, craftingrank, craftinglevel, craftingxp, smithingrank, smithinglevel, smithingxp, miningrank, mininglevel, miningxp, herblorerank, \
            herblorelevel, herblorexp, agilityrank, agilitylevel, agilityxp, thievingrank, thievinglevel, thievingxp, slayerrank, slayerlevel, slayerxp, farmingrank, farminglevel, \
            farmingxp, runecraftrank, runecraftlevel, runecraftxp, hunterrank, hunterlevel, hunterxp, constructionrank, constructionlevel, constructionxp) VALUES ('"+ username +"', "
        + skills.overall.rank + ", " + skills.overall.level + ", " + skills.overall.exp + ", " + skills.attack.rank + ", " + skills.attack.level + ", " + skills.attack.exp
        + ", " + skills.defence.rank + ", " + skills.defence.level + ", " + skills.defence.exp + ", " + skills.strength.rank + ", " + skills.strength.level + ", "
        + skills.strength.exp + ", " + skills.hitpoints.rank + ", " + skills.hitpoints.level + ", " + skills.hitpoints.exp + ", " + skills.ranged.rank + ", "
        + skills.ranged.level + ", " + skills.ranged.exp + ", " + skills.prayer.rank + ", " + skills.prayer.level + ", " + skills.prayer.exp + ", " + skills.magic.rank
        + ", " + skills.magic.level + ", " + skills.magic.exp + ", " + skills.cooking.rank + ", " + skills.cooking.level + ", " + skills.cooking.exp + ", "
        + skills.woodcutting.rank + ", " + skills.woodcutting.level + ", " + skills.woodcutting.exp + ", " + skills.fletching.rank + ", " + skills.fletching.level
        + ", " + skills.fletching.exp + ", " + skills.fishing.rank + ", " + skills.fishing.level + ", " + skills.fishing.exp + ", " + skills.firemaking.rank
        + ", " + skills.firemaking.level + ", " + skills.firemaking.exp + ", " + skills.crafting.rank + ", " + skills.crafting.level + ", " + skills.crafting.exp + ", "
        + skills.smithing.rank + ", " + skills.smithing.level + ", " + skills.smithing.exp + ", " + skills.mining.rank + ", " + skills.mining.level + ", " + skills.mining.exp
        + ", " + skills.herblore.rank + ", " + skills.herblore.level + ", " + skills.herblore.exp + ", " + skills.agility.rank + ", " + skills.agility.rank + ", "
        + skills.agility.rank + ", " + skills.thieving.rank + ", " + skills.thieving.level + ", " + skills.thieving.exp + ", " + skills.slayer.rank + ", "
        + skills.slayer.level + ", " + skills.slayer.exp + ", " + skills.farming.rank + ", " + skills.farming.level + ", " + skills.farming.exp + ", "
        + skills.runecrafting.rank + ", " + skills.runecrafting.level + ", " + skills.runecrafting.exp + ", " + skills.hunter.rank + ", " + skills.hunter.level + ", "
        + skills.hunter.exp + ", " + skills.construction.rank + ", " + skills.construction.level + ", " + skills.construction.exp + ")", function(){
        connection.end();
        });
    
    console.log("Updating "+ username +"\'s tracker.");
}

module.exports = logInfo;