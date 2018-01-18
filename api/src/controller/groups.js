const express = require('express'),
    router = express.Router(),
    Group = require('../model/groups');

router.get('/groups', function (req, res, next) {
    Group.find({}, function (err, groups) {
        res.json({groups});
    })
});

router.post('/groups/add', function (req, res, next) {
    let group = new Group(req.body);
    group.save((err, groupObj) => {
        res.json({groupObj});
    });
});

router.delete('/group/:id', function (req, res, next) {
    let id = req.params.id;
    Group.remove({_id: id}, function () {
        res.json({
            'status': 'ok'
        });
    })
});

// router.update();

module.exports = router;