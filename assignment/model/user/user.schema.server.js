const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'websiteModel'}]
});

module.exports = userSchema;
