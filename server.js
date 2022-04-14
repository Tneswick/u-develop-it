const mysql = require('mysql2')
const express = require('express')
const PORT = process.argv.PORT || 3001
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})