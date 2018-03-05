module.exports = {
    // Setting port for server
    'port': process.env.PORT || 5000,
    'database': process.env.DATABASE_URL || 'postgresql://runestats:2018@localhost.com:5432/RunescapeAPI'

};