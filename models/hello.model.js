const mongoose = require('mongoose');

const helloSchema = mongoose.Schema({
    title: String,
});

const Hello = mongoose.model('Hello', helloSchema);
module.exports = Hello;