// set up framework for Node.js:
const express = require('express');
// set up request logger middleware
const morgan = require('morgan');
// set up logicless templating language from express
const exphbs = require('express-handlebars');
// set up path
const path = require('path');
const { extname } = require('path');

// initializations
/*
The code below will execute express
& store the object in app:
*/
const app = express();

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
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
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
console log requests made:
*/
app.use(morgan('dev'));
/*
The code below will
restrict client input to simple data only:
*/
app.use(express.urlencoded({extended: false}))
/*
The code below will
allow client input to input json format:
*/
app.use(express.json());

// global variables
app.use((req, res, next) => {

    next();
});

// routes
app.use(require('./routes/index.js'));
app.use(require('./routes/authentication.js'));

// public
app.use(express.static(path.join(__dirname, 'public')));

// server trigger
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'));
});