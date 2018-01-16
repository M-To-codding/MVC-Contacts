const express = require('express'),
    router = express.Router(),
    Group = require('../model/groups');


router.get('/groups', function (req, res, next) {
    Group.find({}, function (err, groups) {
        res.json({groups});
    })
});

module.exports = router;