const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello, Welcome to Home Page`);
});
router.post('/register', (req, res) => {
    res.json({message: req.body});
});

module.exports = router;