const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mail')

router.post('/send', function(req, res) {
    mailController.sendMail 
});
module.exports = router;