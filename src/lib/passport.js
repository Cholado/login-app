// set up  authentication middleware for Node.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// database
const db = require('../database');
// password security bcryptjs hash
const helpers = require('./helpers');
// verify user & password compare (form input -> database)
passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const rows = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(password, user.password)
        if (validPassword) {
            done(null, user, req.flash('success', 'Welcome ' + user.username));
        } else {
            done(null, false, req.flash('message', 'Incorrect Password'));
        }
    } else {
        return done(null, false, req.flash('message', 'The Username does not exists.'));
    }
}));

// set up Create user in database
passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {

    const { name } = req.body;
    const { lastname } = req.body;
    const { idtype } = req.body;
    const { idnum } = req.body;
    const { phone } = req.body;
    const { mail } = req.body;
    const { cmail } = req.body;

    if (mail !== cmail) {
        return done(null, false, req.flash('message', 'Email & confirm email must be same.'));
    }

    let newUser = {
        username,
        password,
        name,
        lastname,
        idtype,
        idnum,
        phone,
        mail
    };
    newUser.password = await helpers.encryptPassword(password);
    const result = await db.query('INSERT INTO users SET ? ', newUser);
    newUser.id = result.insertId;
    return done(null, newUser);
}));
// load user on sesssion
passport.serializeUser((user, done) => {
    done(null, user.id);
});
// ask for user on database  
passport.deserializeUser(async (id, done) => {
    const rows = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
});