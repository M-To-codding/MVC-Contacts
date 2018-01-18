const express = require('express'),
    router = express.Router(),
    Contact = require('../model/contacts');


router.get('/contacts', function (req, res, next) {
    Contact.find({}, function (err, contacts) {
        res.json({contacts});
    });
    // next();
});

router.post('/contacts/add', function (req, res) {
    let contact = new Contact(req.body);
    contact.save((err, contactObj) => {
        res.json({contactObj});
    });
    // next();
})

module.exports = router;