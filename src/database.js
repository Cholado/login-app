// set up MySQL
const mysql = require('mysql');
// set up method to allow callbacks as promises
const { promisify } = require('util');
// set up MySQL connection | user info
const { database } = require('./keys');

// set up MySQL database connection + error handling

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Connection lost')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Too many connections')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Connection refused')
        }
    }

    if (connection) connection.release();
    console.log('Connected successfully');
        
    return;
});

// promises from callbacks
pool.query = promisify(pool.query);

module.exports = pool;