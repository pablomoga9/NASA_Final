const express = require('express')
const landingsControllers = require("../controllers/landingsControllers");
const landingsRouter = express.Router();

landingsRouter.get('/astronomy/landings', landingsControllers.getLandings);
// landingsRouter.get('/astronomy/landings/:class', landingsControllers.getLandingsByClass);
landingsRouter.get('/astronomy/landings/:mass', landingsControllers.getLandingsByMass);
landingsRouter.post('/astronomy/landings/create', landingsControllers.createLanding);
landingsRouter.delete('/astronomy/landings/delete/:id',landingsControllers.deleteLanding);
landingsRouter.put('/astronomy/landings/update/:id',landingsControllers.updateLanding);

module.exports = landingsRouter;