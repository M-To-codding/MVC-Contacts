const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const public = __dirname + '/../client/public/';

app.configure = function () {
    app.use(app.router);
}


app.get('/', function (req, res) {
    res.sendFile(path.join(public + 'index.js'));
});

app.use('/', express.static(public));

// require('../client/app/routes')(app, {});
app.listen(port, () => {
    console.log('It`s work');
});
