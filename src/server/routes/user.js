const express = require('express');
const router = express.Router();

const signup = require('../controllers/user').signup;
const login = require('../controllers/user').login;
const getUsers = require('../controllers/user').getUsers;

// authentication
router.post('/signup', signup);
router.post('/login', login);
router.get('/getUsers', getUsers);


module.exports = router;