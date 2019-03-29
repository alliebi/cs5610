module.exports = function (app) {
    app.post("/api/user", createUser);
    app.get("/api/user", findUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);

    const userModel = require("../model/user/user.model.server");

    // var USERS = [
    //     {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland", email: ""},
    //     {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: ""},
    //     {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: ""},
    //     {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: ""}
    // ];

    function createUser(req, res) {
        console.log(req.body);
        userModel
            .createUser(req.body)
            .then(function (newUser) {
                    console.log('Create User Callback');
                    console.log(newUser);
                    res.status(200).send(newUser);
                },
                function (error) {
                    console.log("create error" + error);
                    res.status(404);
                });
    }

    function findUserById(req, res) {
        var userId = req.params["userId"];
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
        var username = req.query["username"];
        var password = req.query["password"];
        console.log(username);
        console.log(password);
        if(password){
            userModel.findByCredentials(username, password).exec(
                function (err, user) {
                    if (err) {
                        return res.sendStatus(400).send(err);
                    }
                    console.log(user);
                    return res.json(user);
                }
            );
        }else{
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
        var userId = req.params['userId'];
        var user = req.body;
        console.log(req.body);
        console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);
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
        var userId = req.params['userId'];
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

