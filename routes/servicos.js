const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Servico = require('../models/servico');

router.get('/', (req, res) => 
Servico.findAll()
.then(servicos => {
    console.log(servicos),
    res.sendStatus(200)
})
.catch((err) => console.log(err))

);

module.exports = router;