module.exports = function (app) {
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const FacebookStrategy = require('passport-facebook').Strategy;
    const userModel = require("../model/user/user.model.server");
    const bcrypt = require('bcrypt-nodejs');

    app.post("/api/user", createUser);
    app.get("/api/user", findUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);
    app.post("/api/login", passport.authenticate('local'), login);
    app.post("/api/logout", logout);
    app.post("/api/register", register);
    app.post("/api/loggedin", loggedin);
    app.get('/facebook/login', passport.authenticate('facebook', {scope: 'email'}));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    }));

    const facebookConfig = {
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
        callbackURL: process.env.FB_CALLBACK_URL,
    }

    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
    passport.use(new LocalStrategy(localStrategy));
    passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

    // Authentication
    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel.findUserById(user._id).then(
            function (user) {
                done(null, user);
            },
            function (err) {
                done(err, null);
            });
    }

    function facebookStrategy(token, refreshToken, profile, done) {
        userModel
            .findUserByFacebookId(profile.id)
            .then(
                function (user) {
                    if (user) {
                        // console.log('Found');
                        // console.log(user);
                        return done(null, user);
                    } else {
                        // console.log('Create new');
                        // console.log(profile);
                        const names = profile.displayName.split(" ");
                        const newFacebookUser = {
                            lastName: names[1],
                            firstName: names[0],
                            email: profile.emails ? profile.emails[0].value : "",
                            facebook: {id: profile.id, token: token}
                        };
                        return userModel.createUser(newFacebookUser);
                    }
                },
                function (err) {
                    if (err) {
                        return done(err);
                    }
                })
            .then(
                function (user) {
                    return done(null, user);
                },
                function (err) {
                    if (err) {
                        return done(err);
                    }
                }
            );
    }

    function localStrategy(username, password, done) {
        userModel
            .findByUsername(username)
            .then(
                function (user) {
                    if (user &&
                        user.username === username &&
                        bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function (err) {
                    if (err) {
                        return done(err);
                    }
                }
            );
    }

    function login(req, res) {
        const user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logOut();
        req.session.destroy();
        // res.send(200);
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function register(req, res) {
        const user = req.body;
        user.password = bcrypt.hashSync(user.password);
        userModel
            .createUser(user)
            .then(
                function (newUser) {
                    if (newUser) {
                        req.login(user, function (error) {
                            if (error) {
                                res.status(400).send(error);
                            } else {
                                res.json(user);
                            }
                        });
                    }
                }
            );
    }

    // CRUD for users
    function createUser(req, res) {
        userModel
            .createUser(req.body)
            .then(function (newUser) {
                    // console.log('Create User Callback');
                    // console.log(newUser);
                    res.status(200).send(newUser);
                },
                function (error) {
                    // console.log("create error" + error);
                    res.status(404);
                });
    }

    function findUserById(req, res) {
        const userId = req.params["userId"];
        userModel.findUserById(userId).exec(
            function (err, user) {
                if (err) {
                    return res.sendStatus(400).send(err);
                }
                return res.json(user);
            }
        );
    }

    function findUser(req, res) {
        const username = req.query["username"];
        const password = req.query["password"];
        if (password) {
            userModel.findByCredentials(username, password).exec(
                function (err, user) {
                    if (err) {
                        return res.sendStatus(400).send(err);
                    }
                    // console.log(user);
                    return res.json(user);
                }
            );
        } else {
            userModel.findByUsername(username).exec(
                function (err, user) {
                    if (err) {
                        return res.sendStatus(400).send(err);
                    }
                    console.log(user);
                    return res.json(user);
                }
            );
        }
    }

    function updateUser(req, res) {
        const userId = req.params['userId'];
        const user = req.body;

        userModel.updateUser(userId, user).exec(
            function (err, user) {
                if (err) {
                    return res.sendStatus(400).send(err);
                }
                console.log(user);
                return res.json(user);
            }
        );
    }

    function deleteUser(req, res) {
        const userId = req.params['userId'];
        userModel.deleteUser(userId).exec(
            function (err, user) {
                if (err) {
                    return res.sendStatus(400).send(err);
                }
                console.log(user);
                return res.json(user);
            }
        );
    }
}

