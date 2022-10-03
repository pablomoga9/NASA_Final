const neasSchema = require('../schemas/neasSchemas');

const getNeasByClass = async (class1)=>{
    try{
        const getByClass = await neasSchema.find({orbit_class:class1}, "designation period_yr -_id");
        console.log(getByClass);
        return getByClass;
    }
    catch(error){
        console.log(error);
    }
}


const getAllNeas = async()=>{
    try{
        const getAll = await neasSchema.find({},"-_id");
        return getAll;
    }
    catch(error){
        console.log(error);
    }
}

const getNeasByDate = async(date)=>{
    try{
        const getDate = await neasSchema.find({discovery_date:{$regex: date, $options: 'i'}});
        return getDate;
    }
    catch(error){
        console.log(error);
    }
}


const getNeasByPeriod = async(from,to)=>{
    if(from && to){
        try{
            const getFromTo = await neasSchema.find({year:{$gt:from, $lt:to}})
            return getFromTo;
        }
        catch(error){
            console.log(error);
        }
    }
    else if(from){
        try{
            const getFrom = await neasSchema.find({year:{$gt:from}});
            return getFrom;
        }
        catch(error){
            console.log(error);
        }
    }
    else{
        try{
            const getTo = await neasSchema.find({year:{$lt:to}});
            return getTo;
        }
        catch(error){
            console.log(error);
        }
    }

}


const createNea = async(body)=>{
    try{
        let nea = new neasSchema(body);
        let saveNea = await nea.save();
        return saveNea;
    }
    catch(error){
        console.log(error);
    }
}


const deleteNeas = async(body)=>{
    try{
        let deleted = await neasSchema.deleteOne({designation: body.designation});
        return `Nea ${body.designation} deleted`
    }
    catch(error){
        console.log(error);
    }
}

const updateNeas = async(body)=>{
    try{
        const newSchema = {
            "designation": body.designation,
            "discovery_date": body.discovery_date,
            "h_mag": body.h_mag,
            "moid_au": body.moid_au,
            "q_au_1": body.q_au_1,
            "q_au_2": body.q_au_2,
            "period_yr": body.period_yr,
            "i_deg": body.i_deg,
            "pha": body.pha,
            "orbit_class": body.orbit_class
        }

        let nea = await neasSchema.findOneAndUpdate({designation: body.designation},newSchema);
        nea.overwrite(newSchema);
        let saveNea = nea.save();
        return saveNea;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    getNeasByClass,
    getAllNeas,
    getNeasByPeriod,
    createNea,
    deleteNeas,
    updateNeas,
    getNeasByDate
}