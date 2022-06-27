// set up framework for Node.js:
const express = require('express');
// set up router from express:
const router = express.Router();

// set up database
const passport = require('passport');
// set up verify for user logged in
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

// set up sign up page render
router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('auth/signup');
});
// set up create user in database with sign up form info
router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

// set up render view of sign in
router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin');
});
// set up sign in verify info match from database
router.post('/signin', (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});
// set up logout 
router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});
// set up user only render of profile
router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

module.exports = router;