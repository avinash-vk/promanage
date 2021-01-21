const { Router } = require('express');
const { addEnv, getProjectEnv, deleteEnv } = require('../controllers/env');

const envRouter = Router();

envRouter.get('/ping', (req,res) => {
    res.send("pong");
});

// Routes
envRouter.get('/env/:id',getProjectEnv);
envRouter.put('/env/:id',addEnv);
envRouter.delete('/env/remove/:id',deleteEnv)

module.exports = envRouter;