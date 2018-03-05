module.exports = {
    // Setting port for server
    'port': process.env.PORT || 5000,
    'database': process.env.DATABASE_URL || {
        host: 'localhost',
        port: 5432,
        user: 'runestats',
        password: '2018',
        database: 'AnalysticsOSRS'
    }

};