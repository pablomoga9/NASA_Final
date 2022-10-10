const express = require('express');
const usersControllers = require("../controllers/usersControllers");
const usersRouter = express.Router();

usersRouter.get('/astronomy/users', usersControllers.getUsers);
usersRouter.get('/astronomy/users/checkuser', usersControllers.checkUser);
usersRouter.post('/astronomy/users/create', usersControllers.createUser);
usersRouter.get('/astronomy/users/cart/:user', usersControllers.getCart);
usersRouter.put('/astronomy/users/cartUpdate/:user', usersControllers.cartUpdate);
usersRouter.post('/astronomy/users/login',usersControllers.loginUser);
usersRouter.get('/astronomy/users/logout', usersControllers.logoutUser);
usersRouter.put('/astronomy/users/edit', usersControllers.updateUser);
usersRouter.delete('/astronomy/users/delete', usersControllers.deleteUser);
module.exports = usersRouter;

