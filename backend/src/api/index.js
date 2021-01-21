const express = require("express");

// Routers
const { userRouter, projectRouter } = require('./routes');

//app
const api = express();

//router config
api.use("/users",userRouter);
api.use("/projects",projectRouter);

module.exports = api;