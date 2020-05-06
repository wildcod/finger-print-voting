const mongoose = require('mongoose');
const VoterUser = require('../models/voterUser');
const randomString = require('../utiil/util').randomString;
const generatePassword = require('../utiil/util').generatePassword;
const User = require('../models/user');
const bcrypt = require('bcrypt');

const addVoter = (req, res, next) => {
    const { name, address, mobile, age } = JSON.parse(req.body.voter_data);
    const voter = new VoterUser({
        _id : new mongoose.Types.ObjectId(),
        name : name,
        address : address,
        mobile : mobile,
        age : age,
        photo : req.files[0].originalname,
        finger_print: req.files[1].originalname
    });

    voter.save()
        .then(result => {
            const username = randomString();
            const password = generatePassword();
            bcrypt.hash(password, 10, function(err, hash) {
                if(err){
                    return res.status(500).json({
                        error : err
                    })
                }else {
                    const user = new User({
                        _id : mongoose.Types.ObjectId(),
                        username : username,
                        password : hash,
                        role : 'voter',
                        voter : result._id
                    });
                    user.save()
                        .then(result => {
                            res.status(200).json({
                                message : "Voter is created",
                                username : result.username,
                                password : password
                            })
                        })
                        .catch(err => {
                            res.status(500).json({
                                error : err
                            })
                        })
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};

const getVoters = (req, res, next) => {
    VoterUser.find()
        .select("_id name address mobile age photo voted_elections")
        .exec()
        .then(voter => {
            const count = voter.length;
            res.status(200).json({
                count,
                voter
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};

module.exports = {
   addVoter,
    getVoters
};