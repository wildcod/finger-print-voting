const mongoose = require('mongoose');
const Election = require('../models/election');

const addElection = (req, res, next) => {
    const { topic, end_date , candidates} = req.body;
    const election = new Election({
        _id : mongoose.Types.ObjectId(),
        topic : topic,
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

    }
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
    getElection
};