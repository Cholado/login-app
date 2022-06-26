// set up framework for Node.js:
const express = require('express');
// set up router from express:
const router = express.Router();

// set up CRUD create page render
router.get('/create', (req, res) => {
    res.render('crud/create')
});

router.post('/create', (req, res) => {
    res.render('crud/create')
});

// set up database
const db = require('../database');

module.exports = router;