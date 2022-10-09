const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    nickname:{
        type: String
    },
    password:{
        type:String
    },
    email:{
        type: String
    },
    picture:{
        type: String
    },
    neasDiscovered:{
        type: Array
    }

})


const User = mongoose.model('users', schema)

module.exports = User;