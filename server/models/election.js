const mongoose = require('mongoose');

const electionSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    topic : {
        type : String,
        required : true,
    },
    voted_candidates : [{
        type : mongoose.Schema.Types.ObjectId
    }],
    end_date : {
        type : String,
        required : true
    },
    start_date : {
        type : Date,
        required : true
    },
    candidates : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Candidates',
    }]
});

module.exports = mongoose.model('Election' ,electionSchema);