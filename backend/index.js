//imports
const express = require('express');
const bodyParser = require('body-parser');

//env config
require('dotenv').config();

// Constant declarations
const PORT = process.env.PORT || 6969;

// Middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
    res.json({"message": "Server is running"});
});

app.get('/ping', (req, res) => {
    res.json({"data": "pong"});
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});