const user = require('../models/userModels');


const createUser = async(req,res)=>{
    console.log("fewfwe")
    try{
        
        let newUser = await user.createUsers(req.body,res);
        res.status(200).json(newUser);
    }
    catch(error){
        console.log(error.stack);
        res.status(400).json({"message":"el usuario no se ha creado"});
    }
}



const getUsers = async(req,res)=>{
    
    if(req.query.email){
        try{
            let userByEmail = await user.getUserByEmail(req.query.email)
            res.status(200).json(userByEmail);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"users not found"});
        }
    }
    else{
        try{
            let getUsers = await user.getAllUser();
            res.status(200).json(getUsers);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message": "users not found"});
        }
    }
   
}

const updateUser = async(req,res)=>{
    try{
        let editUser = await user.editUser(req.body);
        res.status(200).json(editUser);
    }
    catch(error){
        console.log(error.stack);
        res.status(400).json({"message": "couldnt update user"});
    }
}


const deleteUser = async(req,res)=>{
    try{
        let deleted = await user.deleteUser(req.query.email);
        res.status(200).json({"message":"user deleted"});
    }
    catch(error){
        console.log(error.stack);
        res.status(404).json({"message": "user not found"});
    }
}


module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
};