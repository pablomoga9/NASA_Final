const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{
        type: String,
    },
    id:{
        type: Number,
        unique: true
    },
    nametype:{
        type: String
    },
    recclass:{
        type: String
    },
    mass:{
        type: Number
    },
    fall:{
        type: String
    },
    year:{
        type: String
    },
    reclat:{
        type: Number
    },
    reclong:{
        type: Number
    },
    geolocation:{
        latitude:{
            type: String
        },
        longitude:{
            type: String
        }
    }
})

const Landings = mongoose.model('landings', schema);
module.exports = Landings;