const request = require('request');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const configs = require('../configs/configs');


router.get('/:city', async (req, res) => {
    const raw = await fetch(configs.options.url + '?key=' + configs.options.key + '&q=' + req.params.city);
    const clean = await raw.json();
    res.render('ps4', {city: req.params.city, value: JSON.stringify(clean), method: req.method })
})
router.post('/:city', async (req, res) => {
    //the call
    let raw = await fetch(configs.options.url + '?key=' + configs.options.key + '&q=' + req.body.city);
    let clean = await raw.json();
    res.render('ps4', {city: req.body.city, value: JSON.stringify(clean), method: req.method })
})



module.exports = router;