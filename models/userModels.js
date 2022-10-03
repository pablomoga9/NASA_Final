const userSchema = require('../schemas/usersSchema')

const createUsers = async (req,res)=>{
    const newUser = req;//Con el body que pasamos desde el controller con el param "req"
    
    try{
        
        let user = new userSchema(newUser);
        console.log(user);
        let saving = await user.save();
        console.log("pasado");
        res.status(200).json({"message":saving}); 
    }
    catch(error){
        console.log(error.stack);
        res.status(404).json({"message":"there was an error creating user"})
    }
}

const getAllUser = async (req,res)=>{
    try{
        const getUsers = await userSchema.find({},"-_id");
        return getUsers;
    }
    catch(error){
        console.log(error);
    }
}

const getUserByEmail = async (email1)=>{
    try{
        const getUsers = await userSchema.find({email:email1},"-_id");
        return getUsers;
    }
    catch(error){
        console.log(error);
    }
}

const editUser = async (body)=>{
    try{
        const updatedUser = {
            "name": body.name,
            "nickname": body.nickname,
            "email": body.email,
            "picture": body.picture,
            "affiliatedNumber": body.affiliatedNumber,
            "affiliationDate": body.affiliationDate,
            "occupation": body.occupation,
            "birthdate": body.birthdate,
            "neas_discovered": body.neas_discovered
        }
        const user = await userSchema.findOneAndUpdate({email:body.email},updatedUser);
        user.overwrite(updatedUser);
        const saveUser = await user.save();
        return user;
    }
    catch(error){
        console.log(error);
    }
}


const deleteUser = async(email)=>{
    try{
        const deleted = await userSchema.deleteOne({email: email})
        return `${email} deleted`;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    createUsers,
    getAllUser,
    getUserByEmail,
    editUser,
    deleteUser
}