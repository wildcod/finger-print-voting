const mongoose = require('mongoose');
const Candidates = require('../models/candidate');

const addCandidates = (req, res, next) => {
      const { name, address, partyName, age, photo } = JSON.parse(req.body.candidate_data);
      const candidate = new Candidates({
          _id : mongoose.Types.ObjectId(),
          name : name,
          address : address,
          party_name : partyName,
          age : age,
          imageUrl : req.file.path,
          photo : photo
      });
      candidate.save()
          .then(result => {
              console.log(result);
              res.status(200).json({
                  message : "Candidate is created"
              })
          })
          .catch(err => {
              res.status(500).json({
                  error : err
              })
          })
};

const getCandidates = (req, res, next) => {
    Candidates.find()
        .select("_id name address party_name photo age imageUrl")
        .exec()
        .then(candidates => {
            const count = candidates.length
            res.status(200).json({
                count,
                candidates
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};


module.exports = {
    addCandidates,
    getCandidates
};