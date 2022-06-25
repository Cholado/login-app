// set up framework for Node.js:
const express = require('express');
// set up request logger middleware
const morgan = require('morgan');

// initializations
/*
The code below will execute express
& store the object in app:
*/
const app = express();

// settings (express server config)
app.set('port', process.env.PORT || 4000);

// middlewares
/*
The code below will
console log requests made:
*/
app.use(morgan('dev'));

// global variables

// routes
app.use(require('./routes/index.js'))
// public

// server trigger
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'));
});