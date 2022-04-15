const mysql = require('mysql2')


// Connect to Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'election'
    },
    console.log('Connnected to the election database.')
)

module.exports = db;