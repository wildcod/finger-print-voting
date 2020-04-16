const express = require('express');
const router = express.Router();
const upload = require('../utiil/util').upload;
const addCandidates = require('../controllers/candidate').addCandidates;
const addElection = require('../controllers/election').addElection;
const getAllElection = require('../controllers/election').getAllElection;
const getElection = require('../controllers/election').getElection;

//routes
router.post('/add-candidate',upload.single('candidateImage') ,addCandidates);
router.post('/add-election',addElection);
router.get('/get-all-elections',getAllElection);
router.get('/get-election/:electionId',getElection);


module.exports = router;