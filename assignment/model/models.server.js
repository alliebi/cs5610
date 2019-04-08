// 'mongodb://127.0.0.1:27017/webdev',
// 'mongodb://admin:abc123456@ds017165.mlab.com:17165/heroku_xhj2gz7c',
const connectionString = process.env.MONGODB_URI;

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
