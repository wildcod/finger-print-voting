const mongoose = require('mongoose');
const Election = require('../models/election');

const addElection = (req, res, next) => {
    console.log('Data',req.body.data);
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
            console.log(result);
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
        Election.find()
            .populate('candidates')
            .exec()
            .then(elections => {
                const count = elections.length;
                res.status(200).json({
                    count : count,
                    elections : elections
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
        })
        .exec()
        .then(elections => {
            res.status(200).json({
                message : "Cast Successfully",
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


module.exports = {
    addElection,
    getAllElection,
    getElection,
    castVote
};