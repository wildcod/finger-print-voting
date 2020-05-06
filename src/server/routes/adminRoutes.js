const express = require('express');
const router = express.Router();
const upload = require('../utiil/util').upload;
const upload2 = require('../utiil/util').upload2;
const addCandidates = require('../controllers/candidate').addCandidates;
const getCandidates = require('../controllers/candidate').getCandidates;
const addElection = require('../controllers/election').addElection;
const getAllElection = require('../controllers/election').getAllElection;
const getElection = require('../controllers/election').getElection;
const endElection = require('../controllers/election').endElection;
const castVote = require('../controllers/election').castVote;
const voterAuthentication = require('../controllers/fingerPrintAuth').voterAuthentication;

//routes
router.post('/add-candidate',upload.single('file') ,addCandidates);
router.get('/get-candidates', getCandidates);
router.post('/add-election',addElection);
router.post('/get-elections',getAllElection);
router.get('/get-end-elections',endElection);
router.get('/get-election/:electionId',getElection);
router.post('/cast-vote',castVote);


// finger print authentication
router.post('/voter-authentication',upload2.single('finger_print'), voterAuthentication)

module.exports = router;