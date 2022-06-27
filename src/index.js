// set up framework for Node.js:
const express = require('express');
// set up request logger middleware
const morgan = require('morgan');
// set up logicless templating language from express
const exphbs = require('express-handlebars');
// set up path
const path = require('path');
const { extname } = require('path');
// set up module that display flash messages to the user
const flash = require('connect-flash');
// set up sessions to save messages in them
const session = require('express-session');
// set up storage for session data in database
const MySQLStore = require('express-mysql-session');
// set up  authentication middleware for Node.js
const passport = require('passport');
// set up validate for empty & email not equal confirm
const validator = require('express-validator');

// set up access to database keys | info
const { database } = require('./keys');

// initializations
/*
The code below will execute express
& store the object in app:
*/
const app = express();
/*
The code below will
load authentication settings | method:
*/
require('./lib/passport');

// settings (express server config)
/*
The code below set up
localhost port:
*/
app.set('port', process.env.PORT || 4000);
/*
The code below set up
handlebars engine path for views:
*/
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// middlewares
/*
The code below will
Create a session, session ID stored in cookie
Session data is stored server-side in the database:
*/
app.use(session({
    secret: 'choladito',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
  }));
/*
The code below will
send a message whenever a user 
is redirecting to a specified web-page:
*/
app.use(flash());
/*
The code below will
console log requests made:
*/
app.use(morgan('dev'));
/*
The code below will
restrict client input to simple data only:
*/
app.use(express.urlencoded({extended: false}));
/*
The code below will
allow client input to input json format:
*/
app.use(express.json());
/*
The code below will
allow authentication using a username and password:
*/
app.use(passport.initialize());
app.use(passport.session());
// set up validator
app.use(validator());

// global variables
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
});

// routes
app.use(require('./routes/index.js'));
app.use(require('./routes/authentication.js'));
app.use('/crud', require('./routes/crud'));

// public
app.use(express.static(path.join(__dirname, 'public')));

// server trigger
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'));
});