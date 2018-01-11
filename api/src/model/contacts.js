const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
    name: String,
    tel: String
});

module.exports = mongoose.model('Contact', contactsSchema);