const mongoose = require('mongoose');

const groupsSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Group', groupsSchema);