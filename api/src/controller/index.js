const express = require('express'),
    path = require('path'),
    router = express.Router(),
    public = __dirname + '../../../client/public/';

router.use(express.static(public));

router.get('/', function (req, res, next) {
    res.setHeader('content-type', 'application/javascript');
    res.sendFile(path.join(public + 'index.html'));
    next();
});

module.exports = router;