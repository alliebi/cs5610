// mongodb://<dbuser>:<dbpassword>@ds113505.mlab.com:13505/webdev
var connectionString = 'mongodb://127.0.0.1:27017/webdev';
//var connectionString = 'mongodb://webappmaker:webappmaker@ds163181.mlab.com:63181/webappmaker';
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
