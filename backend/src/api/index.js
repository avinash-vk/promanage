const express = require("express");

// Routers
const { userRouter, projectRouter, envRouter } = require('./routes');

//app
const api = express();

//router config
api.use("/users",userRouter);
api.use("/projects",projectRouter);
api.use("/envs",envRouter)
module.exports = api;