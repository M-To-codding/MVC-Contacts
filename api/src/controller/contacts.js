const express = require('express'),
    path = require('path'),
    router = express.Router(),
    public = __dirname + '../../../../client/public/contacts/';

router.use(express.static(public));

router.get('/api/v1/contacts/', function (req, res, next) {
    res.setHeader('content-type', 'application/javascript');
    // res.sendFile(path.join(public + 'contacts.html'));
    // next();
});

module.exports = router;