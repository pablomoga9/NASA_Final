const neas = require('../models/neasModels');

const getNeas = async(req,res)=>{
    if(req.query.class){
       try{
        let neasByClass = await neas.getNeasByClass(req.query.class);
        res.status(200).json(neasByClass)
       }
       catch(error){
        console.log(error.stack);
        res.status(404).json({"message":"neas not found"})
       }
    }
    else if(req.query.from&&req.query.to){
        try{
            let neasBoth = await neas.getNeasByPeriod(req.query.from,req.query.to);
            res.status(200).json(neasBoth); 
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"neas not found"});
        }
    }
    else if(req.query.from){
        try{
            let neasFrom = await neas.getNeasByPeriod(req.query.from, null)
            res.status(200).json(neasFrom);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"neas not found"});
        }
    }
    else if(req.query.to){
        try{
            let neasTo = await neas.getNeasByPeriod(null, req.query.to);
            res.status(200).json(neasTo);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"neas not found"});
        }
    }
    else if(req.query.date){
        try{
            let neasDate = await neas.getNeasByDate(req.query.date);
            res.status(200).json(neasDate);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"neas not found"});
        }
    }
    else{
        try{
            let neasAll = await neas.getAllNeas();
            res.status(200).json(neasAll);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"neas not found"});
        }
    }
}

const createNea = async(req,res)=>{
    try{
        let create = await neas.createNea(req.body);
        res.status(200).json(create);
    }
    catch(error){
        console.log(error.stack);
        res.status(400).json({"message": "Could not create nea"})
    }
}

const deleteNea = async(req,res)=>{
    try{
        let deleteNeas = await neas.deleteNeas(req.body);
        res.status(200).json(deleteNeas)
        console.log("Nea deleted");
    }
    catch(error){
        console.log(error.stack);
        res.status(404).json({"message": "could not find nea"})
    }
}

const updateNea = async(req,res)=>{
    try{
        let update = await neas.updateNeas(req.body);
        res.status(200).json(update);
    }
    catch(error){
        console.log(error.stack);
        res.status(404).json({"message":"could not find nea"});
    }
}

module.exports = {
    getNeas,
    createNea,
    deleteNea,
    updateNea
}