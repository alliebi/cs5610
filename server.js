// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

app.use(cookieParser());
// app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(session({ secret: 'abc1234'}));


app.use(passport.initialize());
app.use(passport.session());

// install, load, and configure body parser module
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, "dist/my-project")));

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

const port = process.env.PORT || '3200';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port ' + port));


require("./assignment/app")(app);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/my-project/index.html'));
});

