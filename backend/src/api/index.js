const express = require("express");

// Routers
const { userRouter } = require('./routes');

//app
const api = express();

//router config
api.use("/user",userRouter);

module.exports = api;