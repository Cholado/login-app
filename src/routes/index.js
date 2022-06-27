// set up framework for Node.js:
const express = require('express');
// set up router from express:
const router = express.Router();

// routes
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;