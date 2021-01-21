const { Router } = require('express');
const { getUser, createUser } = require('../controllers/users');

const userRouter = Router();

userRouter.get('/ping', (req,res) => {
    res.send("pong");
});

// Config
userRouter.get('/:id', getUser);
userRouter.post('/new', createUser);
module.exports = userRouter;