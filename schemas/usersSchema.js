const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    nickname:{
        type: String
    },
    email:{
        type: String
    },
    picture:{
        type: String
    },
    affiliatedNumber:{
        type: Number,
        unique: true
    },
    affiliationDate:{
        type: Date
    },
    occupation:{
        type: String
    },
    birthdate:{
        type: Date
    },
    neasDiscovered:{
        type: Array
    }

})


const User = mongoose.model('users', schema)

module.exports = User;