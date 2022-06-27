// set up framework for Node.js:
const express = require('express');
// set up router from express:
const router = express.Router();

// set up database
const db = require('../database');
// set up verify for user logged in
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

// set up CRUD create page render
router.get('/create', isLoggedIn, (req, res) => {
    res.render('crud/create')
});

// set up Create item in database, wait for the promise
router.post('/create', isLoggedIn, async (req, res) => {
    const {title, url, description} = req.body;
    const item = {
        title,
        url,
        description
    };
    await db.query('INSERT INTO crud SET ?', [item]);
    req.flash('success', 'Item Created Successfully');
    res.redirect('/crud');
});

// set up Read item in database
router.get('/', isLoggedIn, async (req, res) => {
    const read = await db.query('SELECT * FROM crud');
    res.render('crud/read', { read });
});

// set up Delete item in database
router.get('/delete/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    await db.query('DELETE FROM crud WHERE ID = ?', [id]);
    req.flash('success', 'Item Deleted Successfully');
    res.redirect('/crud');
});

// set up Update item in database
// ask what item needs update
router.get('/update/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const update = await db.query('SELECT * FROM crud WHERE id = ?', [id]);
    res.render('crud/update', { update: update[0]});
});
// update
router.post('/update/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const { title, description, url} = req.body; 
    const newItem = {
        title,
        description,
        url
    };
    await db.query('UPDATE crud SET ? WHERE id = ?', [newItem, id]);
    req.flash('success', 'Item Updated Successfully');
    res.redirect('/crud');
});

module.exports = router;