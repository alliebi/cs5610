module.exports = function (app) {
    app.post("/api/user/:userId", createUser);
    app.get("/api/user", findUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);

    var USERS = [
        {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland", email: ""},
        {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: ""},
        {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: ""},
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: ""}
    ];

    function createUser(req, res) {
        const user = req.body;
        for (const i = 0; i < USERS.length; i++) {
            if (USERS[i].username === user["username"]) {
                res.status(404).send("This username is already exist.");
                return;
            }

            user._id = Math.random().toString();
            USERS.push(user);
            res.json(user);
        }
    }

    function findUser(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        var user = null;

        if (password) {
            user = findUserByCredentials(username, password);
            console.log("password");
        } else {
            user = findUserByUsername(username);
        }
        res.json(user);
    }

    function findUserByUsername(username) {
        return USERS.find(function (user) {
            return user.username === username;
        });
    }

    function findUserByCredentials(username, password) {
        if (username && password) {
            return USERS.find(function (user) {
                console.log(user.username);
                return user.username === username && (user.password === password || password === null);
            });
        }
    }

    function findUserById(req, res) {
        var userId = req.params["userId"];
        var user = USERS.find(function (user) {
            return user._id === userId;
        });
        res.json(user);
    }

    function updateUser(req, res) {
        var userId = req.params['userId'];
        var user = req.body;
        console.log(req.body);
        console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

        for (var i = 0; i < USERS.length; i++) {
            if (USERS[i]._id === userId) {
                USERS[i].firstName = user.firstName;
                USERS[i].lastName = user.lastName;
                USERS[i].email = user.email;
                res.status(200).json(user);
                return;
            }
        }
        res.status(404).send("not found!");
    }

    function deleteUser(req, res) {
        var userId = req.params['userId'];
        for (const i in USERS) {
            if (USERS[i]._id === userId) {
                const j = +i;
                USERS.splice(j, 1);
            }
        }
    }
}
