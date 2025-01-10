const express = require('express')
const {contactUser} = require('../controllers/Contact.Controller.js')

const router = express.Router();
router.post('/contactuser',contactUser)

module.exports = router