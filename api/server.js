const app = require('express')(),
    bodyParser = require('body-parser'),
    config = require('./resources/config'),
    contacts = require('./src/index');

app.listen(config.port, () => {
    console.log('It`s work');
});

app.use(bodyParser.json());

app.use('/', contacts);

module.exports = app;