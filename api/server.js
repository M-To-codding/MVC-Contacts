const app = require('express')(),
    express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./resources/config'),
    // main = require('./src/controller/index'),
    contacts = require('./src/controller/contacts'),
    groups = require('./src/controller/groups');

require('./db');


app.listen(config.port, () => {
    console.log('It`s work');
});

app.use(bodyParser.json());

app.use(express.static(__dirname + './../client/public/'));

app.use('/api/v1', contacts);
app.use('/api/v1', groups);

module.exports = app;