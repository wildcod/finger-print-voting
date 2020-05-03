const mongoose = require('mongoose');

const voterUserSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true,
        unique: true,
        match: /^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1}){0,1}98(\s){0,1}(\-){0,1}(\s){0,1}[1-9]{1}[0-9]{7}$/
    },
    age : {
        type : Number,
        required : true
    },
    photo : {
        type : String,
        required : true
    },
    finger_print : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('VoterUser' ,voterUserSchema);