require('dotenv').config();
const user = require('../models/userModels');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createUser = async(req,res)=>{
    try{
        const hashPassword = bcrypt.hashSync(req.body.password,saltRounds);
        const newBody = {
            nickname:req.body.nickname,
            password:hashPassword,
            email:req.body.email,
            picture:'',
            neasDiscovered:[]
        }
        
        let newUser = await user.createUsers(newBody);
        res.status(200).json(newUser);
    }
    catch(error){
        console.log(error.stack);
        res.status(400).json({"message":"el usuario no se ha creado"});
        return "already exists"
    }
}


const checkUser = async(req,res)=>{
    try{
        
        res.status(200).json({msg:req.headers.cookie})
    }
    catch(error){
        res.status(400).json({msg:"user not found"})
    }
}

const loginUser = async(req,res)=>{
    try{
        let data = await user.getUserByEmail(req.body.email);
        const password = data[0].password;
        if(!data){
            res.status(200).json({msg:"Usuario no encontrado"});
        }
        else{
          
            const match = await bcrypt.compare(req.body.password,password)
            if(match){
                const userForToken = {
                    email:data[0].email,
                    nickname:data[0].nickname,
                    check:true
                };

                const token = jwt.sign(userForToken,process.env.SECRET_TOKEN,{
                    expiresIn:10000
                })
                res.cookie("token", token, { httpOnly: true
                }).send()
                return token
                // console.log(res.cookie);
            }
            else{
                res.status(400).json({ msg: "Usuario o contaseña incorrecta" });
            }
        }
    }
    catch(error){
        console.log(error);
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
    deleteUser,
    loginUser,
    checkUser
};