const express = require('express');
const router = express.Router();
const upload = require('../utils').upload;
const upload2 = require('../utils').upload2;
const addVoter =require('../controllers/voterUser').addVoter;
const getVoters =require('../controllers/voterUser').getVoters;

// routes
router.post('/add-voter',upload2.array('image' ,2) ,addVoter);
router.get('/get-voters',getVoters);


module.exports = router;