const mongoose = require('mongoose')

const AdoptSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    petSelected:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

const Adopt = mongoose.model('Adopt',AdoptSchema)
module.exports = Adopt;