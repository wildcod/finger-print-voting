const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    username : {
        type : String,
        required : true,
        unique : true,
        match : /^[a-zA-Z0-9]+$/
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        enum : ['admin', 'voter']
    },
    voter : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'VoterUser',
    }
});

module.exports = mongoose.model('User' ,userSchema);