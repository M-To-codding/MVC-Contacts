const mongoose = require('mongoose'),
    config = require('resources/config');

mongoose.connect(config.dbUrl, err => {
    if (err) {
      console.log(err);
    }
});

module.exports = mongoose;