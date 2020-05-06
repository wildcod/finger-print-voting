const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signup = (req, res, next) => {

    bcrypt.hash(req.body.password, 10, function(err, hash) {

        if(err){
            return res.status(500).json({
                error : err
            })
        }else {
            const user = new User({
                _id : mongoose.Types.ObjectId(),
                username : req.body.username,
                password : hash,
                role : req.body.role
            });
            user.save()
                .then(result => {
                    res.status(200).json({
                        message : "User is created"
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        error : err
                    })
                })
        }

    })
};

const getUsers = (req, res, next) => {
    User.find()
        .select("_id name username role")
        .populate('VoterUser')
        .exec()
        .then(users => {
            const count = users.length
            res.status(200).json({
                count,
                users
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};

const login = (req, res, next) => {
    User.find({ username : req.body.username})
        .exec()
        .then(user => {
            if(user.length < 1){
                return res.status(401).json({
                    message : 'Auth Failed'
                })
            }

            bcrypt.compare(req.body.password, user[0].password, (err,result) => {
                if(err){
                    return res.status(401).json({
                        message : 'Auth Failed'
                    })
                }
                if(result){

                    const token = jwt.sign(
                        {
                            username : req.body.username,
                            userId : user[0]._id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn : 900000
                        }
                    );

                    return res.status(200).json({
                        message : 'Auth Successful',
                        token,
                        username : user[0].username,
                        name : user[0].name,
                        _id : user[0]._id,
                        role : user[0].role
                    })
                }
                res.status(401).json({
                    message : 'Auth Failed'
                })
            })

        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

module.exports = {
    signup,
    login,
    getUsers
};