const { Router } = require('express');
const { getProject, getProjects, createProject, updateProject, deleteProject, addEnv, getProjectEnv, deleteEnv } = require('../controllers/projects');

const projectRouter = Router();

projectRouter.get('/ping', (req,res) => {
    res.send("pong");
});

// Routes
projectRouter.get('/project/:id', getProject);
projectRouter.put('/project/:id', updateProject)
projectRouter.delete('/project/:id', deleteProject)
projectRouter.get('/user/:id', getProjects);
projectRouter.post('/new', createProject);
projectRouter.get('/env/:id',getProjectEnv);
projectRouter.put('/env/:id',addEnv);
projectRouter.put('/env/remove/:id',deleteEnv)


module.exports = projectRouter;