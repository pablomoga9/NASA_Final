const landingSchema = require('../schemas/landingsSchema');

const getLandingsByMassStart = async(mass)=>{
    try{
        const getByMass = await landingSchema.find({mass:{$gt:mass}},"name mass -_id");
        return getByMass;
    }
    catch(error){
        console.log(error)
    }
}

const getLandingsByPeriod = async(from,to)=>{
    if(from&&to){
        try{
            const getFromTo = await landingSchema.find({year:{$gt:from, $lt:to}});
            return getFromTo;
        }
        catch(error){
            console.log(error);
        }
    }
    else if(from){
        try{
            const getFrom = await landingSchema.find({year:{$gt:from}});
            return getFrom;
        }
        catch(error){
            console.log(error);
        }
    }
    else if(to){
        try{
            const getTo = await landingSchema.find({year:{$lt:to}});
            return getTo;
        }
        catch(error){
            console.log(error)
        }
    }
    else{
        try{
            const getAll = await landingSchema.find({},"-_id");
            return getAll;
        }
        catch(error){
            console.log(error);
        }
    }
}

const getLandingsByMass = async(mass)=>{
    try{
        const getByMass = await landingSchema.find({mass:mass},"name mass -_id");
        return getByMass;
    }
    catch(error){
        console.log(error);
    }
}

const getLandingsByClass = async(class1)=>{
    try{
        const getByClass = await landingSchema.find({recclass:class1}, "name recclass -_id");
        return getByClass;
    }
    catch(error){
        console.log(error);
    }
}

const createLanding = async(body)=>{
    try{
        let landing = new landingSchema(body);
        let saveLanding = await landing.save();

        return saveLanding
    }
    catch(error){
        console.log(error);
    }
}

const updateLanding = async(body)=>{
    try{
        const landing = {
            "id": body.id,
            "name": body.id,
            "nametype": body.nametype,
            "reclass": body.reclass,
            "mass": body.mass,
            "fall": body.fall,
            "year": body.year,
            "reclat": body.reclat,
            "reclong": body.reclong,
            "geolocation": body.geolocation
        }

        const findLanding = await landingSchema.findByIdAndUpdate({id: body.id},landing);
        findLanding.overwrite(landing);
        const saveLanding = findLanding.save();
        return findLanding;
    }
    catch(error){
        console.log(error);
    }
}

const deleteLanding = async(body)=>{
    try{
        const deletedLanding = await landingSchema.deleteOne({id:body.id});
        return deletedLanding;
    }
    catch(error){
        console.log(error);
    }
}



module.exports = {
    getLandingsByMassStart,
    getLandingsByPeriod,
    getLandingsByMass,
    getLandingsByClass,
    createLanding,
    updateLanding,
    deleteLanding
}