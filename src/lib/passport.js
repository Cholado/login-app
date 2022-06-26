// set up  authentication middleware for Node.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// database
const db = require('../database');
// password security bcryptjs hash
const helpers = require('./helpers');

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