const mongoose = require('mongoose');

const electionSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true,
    },
    voted_candidates : [{
        type : mongoose.Schema.Types.ObjectId
    }],
    end_date : {
        type : Date,
        required : true
    },
    start_date : {
        type : Date,
        required : true
    },
    election_id : {
        type : String,
        required : true,
    },
    candidates : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Candidates',
        required : true
    }]
});

module.exports = mongoose.model('Election' ,electionSchema);