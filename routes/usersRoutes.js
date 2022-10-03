const express = require('express');
const usersControllers = require("../controllers/usersControllers");
const usersRouter = express.Router();

usersRouter.get('/astronomy/users', usersControllers.getUsers);
usersRouter.post('/astronomy/users/create', usersControllers.createUser);
usersRouter.put('/astronomy/users/edit', usersControllers.updateUser);
usersRouter.delete('/astronomy/users/delete', usersControllers.deleteUser);
module.exports = usersRouter;

