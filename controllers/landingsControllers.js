const landing = require('../models/landingModels');

const getLandings = async(req,res)=>{
    if(req.query.mass_start){
        try{
            const getMass = await landing.getLandingsByMassStart(req.query.mass_start);
            res.status(200).json(getMass);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message": "landings not found"});
        }
    }
    else if(req.query.from && req.query.to){
        try{
            const getFromTo = await landing.getLandingsByPeriod(req.query.from,req.query.to);
            res.status(200).json(getFromTo);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"landings not found"});
        }
    }
    else if(req.query.from){
        try{
            const getFrom = await landing.getLandingsByPeriod(req.query.from,null);
            res.status(200).json(getFrom);
        }   
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"landings not found"});
        }
    }
    else if(req.query.to){
        try{
            const getTo = await landing.getLandingsByPeriod(null,req.query.to);
            res.status(200).json(getTo);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"landings not found"});
        }
    }
    else{
        try{
            const getAll = await landing.getLandingsByPeriod();
            res.status(200).json(getAll);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"landings not found"});
        }
    }
}
const getLandingsByClass = async(req,res)=>{
    try{
        const getClass = await landing.getLandingsByClass(req.params.class);
        res.status(200).json(getClass);
    }   
    catch(error){
        console.log(error.stack);
        res.status(404).json({"message":"landings not found"});
    }
}
const getLandingsByMass = async(req,res)=>{
    try{
        const getMass = await landing.getLandingsByMass(req.params.mass);
        res.status(200).json(getMass);
    }
    catch(error){
        console.log(error.stack);
        res.status(404).json({"message":"landings not found"});
    }
}

const createLanding = async(req,res)=>{
    try{
        const create = await landing.createLanding(req.body);
        res.status(200).json(create);
    }
    catch(error){
        console.log(error.stack);
        res.status(400).json({"message":"could not create"});
    }
}

const updateLanding = async(req,res)=>{
    try{
        const update = await landing.updateLanding(req.body);
        res.status(200).json(update);
    }
    catch(error){
        console.log(error.stack);
        res.status(404).json({"message":"landing not found"});
    }
}

const deleteLanding = async(req,res)=>{
    try{
        const deleteLandings = await landing.deleteLanding(req.body);
        res.status(200).json(deleteLandings);
    }
    catch(error){
        console.log(error.stack);
        res.status(404).json({"message":"landing not found"});
    }
}

module.exports = {
    getLandings,
    getLandingsByClass,
    getLandingsByMass,
    createLanding,
    updateLanding,
    deleteLanding
}