var mongoose = require('mongoose');
var widgetSchema = new mongoose.Schema({
    _page: {type: mongoose.Schema.ObjectId, ref: "pageModel"},
    widgetType: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT', 'TEXT']},
    name: String,
    text: String,
    placeholder: String,
    description: String,
    url: String,
    width: String,
    height: String,
    rows: Number,
    size: Number,
    class: String,
    icon: String,
    deletable: Boolean,
    formatted: Boolean,
    position: Number,
    dateCreated: {type: Date, default: Date.now()}
});

module.exports = widgetSchema;


