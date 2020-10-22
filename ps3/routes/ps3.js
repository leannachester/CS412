const express = require('express');
const router = express.Router();


router.route('/')
    .get((req, res, next) => {
        res.render('ps3',
            { FixedString: 'My Node App'})
    })
    .post((req, res, next) => {
        res.render('ps3', {FixedString: req.body.FixedString,
            Length: req.body.FixedString.length});
    });

module.exports = router;