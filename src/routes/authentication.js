// set up framework for Node.js:
const express = require('express');
// set up router from express:
const router = express.Router();

// set up sign up page render
router.get('/signup', (req, res) => {
    res.render('')
});

// set up database
const db = require('../database');

module.exports = router;