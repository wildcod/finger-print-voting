const User = require('../models/user');
const cp = require('child_process')
const fs = require('fs');

const voterAuthentication = async (req, res, next) => {
    User.find({ username : req.body.username })
        .populate('voter')
        .exec()
        .then(voter => {
            if(voter.length) {
                const originalFingerPrint = voter[0].voter.finger_print;
                const uploadedFingerPrint = req.file.originalname;
                const pythonProcess = cp.spawn('python3', ['./run2.py', originalFingerPrint , uploadedFingerPrint])
                pythonProcess.stdout.setEncoding('utf-8');
                pythonProcess.stderr.on('end', (data) => {
                    fs.readFile('output_pred.txt', 'utf8', function(err, data) {
                        if (err) throw err;
                        if(data){
                           return res.status(200).json({
                                message: parseFloat(data) >= 85 ? 'verified' : 'Not verified',
                                data : data,
                                voter : parseFloat(data) >= 85 ? voter[0] : null
                            })
                        }
                    });
                });
            }else{
                res.status(500).json({
                    message: 'Something went wrong'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};


module.exports = {
    voterAuthentication
};

