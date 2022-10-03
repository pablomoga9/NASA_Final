const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    designation:{
        type: String
    },
    discovery_date:{
        type: String
    },
    h_mag:{
        type: Number
    },
    moid_au:{
        type: Number
    },
    q_au_1:{
        type: Number
    },
    q_au_2:{
        type: Number
    },
    period_yr:{
        type: Number
    },
    i_deg:{
        type: Number
    },
    pha:{
        type: String
    },
    orbit_class:{
        type: String
    }
})


const Neas = mongoose.model('neas', schema);
module.exports = Neas;