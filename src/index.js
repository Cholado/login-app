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

// global variables

// routes
app.use(require('./routes/index.js'));
// public

// server trigger
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'));
});