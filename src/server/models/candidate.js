const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    party_name : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Candidates' ,candidateSchema);