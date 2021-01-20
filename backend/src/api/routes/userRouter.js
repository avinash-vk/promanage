const { Router } = require('express');
const { getUser } = require('../controllers/user');

const userRouter = Router();

userRouter.get('/ping', (req,res) => {
    res.send("pong");
});

// Config
userRouter.get('/:id', getUser);

module.exports = userRouter;