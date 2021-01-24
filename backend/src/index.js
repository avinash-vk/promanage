//imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api');

const { authenticate } = require("./db/config");
//env config
require('dotenv').config();

// Constant declarations
const PORT = process.env.PORT || 6969;

// Middleware
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(authenticate);
// Routes
app.get('/', (req, res) => {
    res.json({"message": "Server is running"});
});

app.get('/ping', (req, res) => {
    res.json({"data": "pong"});
});

// Routers
app.use('/api/v1', api);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
