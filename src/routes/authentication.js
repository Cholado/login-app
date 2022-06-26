// set up framework for Node.js:
const express = require('express');
// set up router from express:
const router = express.Router();

// set up database
const passport = require('passport');

// set up sign up page render
router.get('/signup', (req, res) => {
    res.render('auth/signup');
});
// set up create user in database with sign up form info
router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

// set up database
const db = require('../database');

module.exports = router;