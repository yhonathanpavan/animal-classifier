const express = require('express');

const service = require("./../service/service");

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main');
})

router.post('/', (req, res) => {
    request = new Array(16).fill(0);
    Object.entries(req.body).forEach(data => {
        request[data[0]] = data[1] === "on" ? 1 : parseInt(data[1]);
    });

    response = service.classifyAndGetAnimalInformation(request);

    res.render('resultPage', response);
})

module.exports = app => app.use('/', router);
