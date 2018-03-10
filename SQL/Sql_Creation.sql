CREATE TABLE users
(
    id serial primary key NOT NULL,
    username character varying(12) unique NOT NULL,
    last_search date NOT NULL DEFAULT CURRENT_DATE
)

CREATE TABLE stats
(
    id serial primary key NOT NULL,
    username integer references users(id) NOT NULL,
    overallrank text NOT NULL,
    overalllevel text NOT NULL,
    overallxp text NOT NULL,
    attackrank text NOT NULL,
    attacklevel text NOT NULL,
    attackxp text NOT NULL,
    defencerank text NOT NULL,
    defencelevel text NOT NULL,
    defencexp text NOT NULL,
    strengthrank text NOT NULL,
    strengthlevel text NOT NULL,
    strengthxp text NOT NULL,
    hitpointsrank text NOT NULL,
    hitpointslevel text NOT NULL,
    hitpointsxp text NOT NULL,
    rangedrank text NOT NULL,
    rangedlevel text NOT NULL,
    rangedxp text NOT NULL,
    prayerrank text NOT NULL,
    prayerlevel text NOT NULL,
    prayerxp text NOT NULL,
    magicrank text NOT NULL,
    magiclevel text NOT NULL,
    magicxp text NOT NULL,
    cookingrank text NOT NULL,
    cookinglevel text NOT NULL,
    cookingxp text NOT NULL,
    woodcuttingrank text NOT NULL,
    woodcuttinglevel text NOT NULL,
    woodcuttingxp text NOT NULL,
    fletchingrank text NOT NULL,
    fletchinglevel text NOT NULL,
    fletchingxp text NOT NULL,
    fishingrank text NOT NULL,
    fishinglevel text NOT NULL,
    fishingxp text NOT NULL,
    firemakingrank text NOT NULL,
    firemakinglevel text NOT NULL,
    firemakingxp text NOT NULL,
    craftingrank text NOT NULL,
    craftinglevel text NOT NULL,
    craftingxp text NOT NULL,
    smithingrank text NOT NULL,
    smithinglevel text NOT NULL,
    smithingxp text NOT NULL,
    miningrank text NOT NULL,
    mininglevel text NOT NULL,
    miningxp text NOT NULL,
    herblorerank text NOT NULL,
    herblorelevel text NOT NULL,
    herblorexp text NOT NULL,
    agilityrank text NOT NULL,
    agilitylevel text NOT NULL,
    agilityxp text NOT NULL,
    thievingrank text NOT NULL,
    thievinglevel text NOT NULL,
    thievingxp text NOT NULL,
    slayerrank text NOT NULL,
    slayerlevel text NOT NULL,
    slayerxp text NOT NULL,
    farmingrank text NOT NULL,
    farminglevel text NOT NULL,
    farmingxp text NOT NULL,
    runecraftrank text NOT NULL,
    runecraftlevel text NOT NULL,
    runecraftxp text NOT NULL,
    hunterrank text NOT NULL,
    hunterlevel text NOT NULL,
    hunterxp text NOT NULL,
    constructionrank text NOT NULL,
    constructionlevel text NOT NULL,
    constructionxp text NOT NULL,
    checkdate date NOT NULL DEFAULT CURRENT_DATE
)