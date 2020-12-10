
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const configs = require('../configs/configs');
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const existsAsync = promisify(client.exists).bind(client);
const setAsync = promisify(client.set).bind(client);
const expireAsync = promisify(client.expire).bind(client);



//error
client.flushdb((error, response) => {
    if (error) {
        throw new Error('bad')
    }
});

router.get('/:city', async (req, res) => {
    // let city = req.params.city;
    let match = await existsAsync(req.params.city);
    if (match) {
        let cityData = await getAsync(req.params.city);
        let response = {
            cityData: cityData,
            cached: true
        }
        res.send(response);

    } else {
        let raw = await fetch(configs.options.url + '?key=' + configs.options.key + '&q=' + req.params.city);
        let cityData = await raw.json();
        await setAsync(req.params.city, JSON.stringify(cityData));
        let response = {
            cityData: cityData,
            cached: false
        }
        await expireAsync(req.params.city, 15);
        res.send(response)
    }
});
    // const raw = await fetch(configs.options.url + '?key=' + configs.options.key + '&q=' + req.params.city);
    // const clean = await raw.json();
    // res.render('ps4', {city: req.params.city, value: clean.current.temp_f, method: req.method })
// })
router.post('/', async (req, res) => {
    let match = await existsAsync(req.body.city);
    if (match) {
        let cityData = await getAsync(req.body.city);
        let response = {
            cityData: await JSON.parse(cityData),
            cached: true
        }
        res.send(response);

    } else {
        let raw_p = await fetch(configs.options.url + '?key=' + configs.options.key + '&q=' + req.body.city);
        let cityData_p = await raw_p.json();
        await setAsync(req.body.city, JSON.stringify(cityData_p));
        let response = {
            cityData: cityData_p,
            cached: false
        }
        await expireAsync(req.body.city, 15);
        res.send(response)
    }
});

    //the call
//     let raw = await fetch(configs.options.url + '?key=' + configs.options.key + '&q=' + req.body.city);
//     let clean = await raw.json();
//     res.render('ps4', {city: req.body.city, value: clean.current.temp_f, method: req.method })
// })




//ps4/
router.get('/',(req, res) => {
    res.render('ps4');
});

module.exports = router;