const mongoose = require('mongoose');
const Candidates = require('../models/candidate');

const addCandidates = (req, res, next) => {
    console.log('file', req.file);
      const { name, address, mobile, age } = req.body;
      const candidate = new Candidates({
          _id : mongoose.Types.ObjectId(),
          name : name,
          address : address,
          mobile : mobile,
          age : age,
          photo : req.file.path
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


module.exports = {
    addCandidates
};