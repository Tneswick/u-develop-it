const express = require('express')
const PORT = process.argv.PORT || 3001
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})