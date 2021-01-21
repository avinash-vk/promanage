const { Router } = require('express');
const { getProject, getProjects, createProject, updateProject, deleteProject } = require('../controllers/projects');

const projectRouter = Router();

projectRouter.get('/ping', (req,res) => {
    res.send("pong");
});

// Routes
projectRouter.get('/project/:id', getProject);
projectRouter.post('/project/:id', updateProject)
projectRouter.delete('/project/:id', deleteProject)
projectRouter.get('/user/:id', getProjects);
projectRouter.post('/new', createProject);

module.exports = projectRouter;