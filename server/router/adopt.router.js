const express = require('express')
const {AdoptDog} = require('../controllers/adopt.controller.js')

const router = express.Router();
router.post('/pet',AdoptDog)

module.exports = router