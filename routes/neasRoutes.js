const express = require('express')
const neasControllers = require("../controllers/neasControllers");
const neasRouter = express.Router();

 neasRouter.get('/astronomy/neas', neasControllers.getNeas);
 neasRouter.post('/astronomy/neas/create', neasControllers.createNea);
 neasRouter.delete('/astronomy/neas/delete/:designation', neasControllers.deleteNea);
 neasRouter.put('/astronomy/neas/update/', neasControllers.updateNea);

 module.exports = neasRouter;