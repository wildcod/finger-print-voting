const mongoose = require('mongoose');
const Election = require('../models/election');
const VoterUser = require('../models/voterUser');
const User = require('../models/user');
const moment = require('moment')

const addElection = (req, res, next) => {
    const { name, end_date , candidates, electionId} = req.body.data;
    const election = new Election({
        _id : mongoose.Types.ObjectId(),
        name : name,
        election_id : electionId,
        end_date : new Date(end_date),
        start_date : new Date(),
        candidates : candidates
    });
    election.save()
        .then(result => {
            res.status(200).json({
                message : "Election is created"
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};


const getAllElection = (req, res, next) => {
    const { voterId } = req.body;
        Election.find()
            .populate('candidates')
            .exec()
            .then(elections => {
                User.findById( { _id : voterId})
                    .populate('voter')
                    .exec()
                    .then(users => {
                        if(users.voter) {
                            res.status(200).json({
                                elections: elections,
                                votedElections: users.voter.voted_elections
                            })
                        }else{
                            res.status(200).json({
                                elections: elections,
                                votedElections: []
                            })
                        }
                    })
                    .catch(err => {
                        res.status(500).json({
                            error : err
                        })
                    })
            })
            .catch(err => {
                res.status(500).json({
                    error : err
                })
            })
    };


const castVote = (req, res, next) => {
    Election.findOneAndUpdate(
        {_id : req.body.id},
        {
            $push : { 'voted_candidates' : req.body.candidateId },
        },
        )
        .exec()
        .then(elections => {
            VoterUser.findOneAndUpdate(
                { _id : req.body.voterId },
                {
                    $push : { 'voted_elections' : req.body.id }
                },
                {new: true}
                )
                .exec()
                .then(voter => {
                    res.status(200).json({
                        message : "Cast Successfully",
                        voter : voter
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};


const getElection = (req, res, next) => {
    Election.findById({ _id : req.params.electionId})
        .populate('candidates')
        .exec()
        .then(result => {
            res.status(200).json({
                message : "Get success",
                election : result
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })

};

const endElection = (req, res, next) => {
    Election.find()
        .populate('candidates')
        .exec()
        .then(result => {
            const currentDate = moment().format('DD/MM/YYYY');
            const closedElections = result.filter(e => moment(e.end_date).format('DD/MM/YYYY') === currentDate)
            res.status(200).json({
                message : "Get success",
                election : closedElections
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};


module.exports = {
    addElection,
    getAllElection,
    getElection,
    castVote,
    endElection
};