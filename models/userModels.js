const userSchema = require('../schemas/usersSchema')

const createUsers = async (user)=>{
    try{
        
        let userCreate = new userSchema(user);
        console.log(user);
        let saving = await userCreate.save();
        console.log("pasado");
       
    }
    catch(error){
        console.log(error.stack);
    }
}

const getCartByNickname = async(nick)=>{
    try{
        const getUsers = await userSchema.find({nickname:nick},"-_id");
        return getUsers
    }
    catch(error){
        console.log(error.stack);
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

const updateCart = async(user)=>{
    try{
        // console.log(user);
        const getUsers = await userSchema.find({nickname:user.nick},"neasDiscovered -_id");
        const updateList = [user.list,...getUsers[0].neasDiscovered]
        console.log(updateList);
        const updateUser = await userSchema.findOneAndUpdate({nickname:user.nick},{$set:{neasDiscovered:updateList}})
    }
    catch(error){
        console.log(error.stack);
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
    deleteUser,
    getCartByNickname,
    updateCart
}