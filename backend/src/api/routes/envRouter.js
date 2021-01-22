const { Router } = require('express');
const { addEnv, getProjectEnv, deleteEnv, deleteEnvPair } = require('../controllers/env');

const envRouter = Router();

envRouter.get('/ping', (req,res) => {
    res.send("pong");
});

// Routes
envRouter.get('/env/:id',getProjectEnv);
envRouter.put('/env/:id',addEnv);
envRouter.delete('/env/remove/:id',deleteEnv)
envRouter.put('/env/remove/:id/:key',deleteEnvPair)

module.exports = envRouter;