const express = require("express");
const { authenticate } = require("../db/config");
// Routers
const { userRouter, projectRouter, envRouter } = require('./routes');

//app
const api = express();
api.use(authenticate);
//router config
api.use("/users",userRouter);
api.use("/projects",projectRouter);
api.use("/envs",envRouter)
module.exports = api;