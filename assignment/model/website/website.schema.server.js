const mongoose = require('mongoose');
const websiteSchema = new mongoose.Schema({
    _user: {type: mongoose.Schema.ObjectId, ref: "userModel"},
    name: String,
    description: String,
    dateCreated: {type: Date, default: Date.now()},
    pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'pageModel'}]
});

module.exports = websiteSchema;
