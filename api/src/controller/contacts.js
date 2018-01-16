const express = require('express'),
    router = express.Router(),
    Contact = require('../model/contacts');


router.get('/contacts', function (req, res, next) {
    Contact.find({}, function (err, contacts) {
        res.json({contacts});
    })
});

module.exports = router;