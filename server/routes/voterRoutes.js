const express = require('express');
const router = express.Router();
const upload = require('../utiil/util').upload;
const addVoter =require('../controllers/voterUser').addVoter;
const getVoters =require('../controllers/voterUser').getVoters;

// routes
router.post('/add-voter',upload.single('voterImage') ,addVoter);
router.get('/get-voters',getVoters);


module.exports = router;