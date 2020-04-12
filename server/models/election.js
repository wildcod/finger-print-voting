const mongoose = require('mongoose');

const electionSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    topic : {
        type : String,
        required : true,
    },
    voted_candidates : [{
        type : String,
        required : true
    }],
    end_date : {
        type : String,
        required : true
    },
    candidates : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Candidate',
    }]
});

module.exports = mongoose.model('Election' ,electionSchema);