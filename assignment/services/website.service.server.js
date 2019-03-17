module.exports = function (app) {
    const WEBSITES = [
        {_id: "321", name: "Facebook", developerId: "123"},
        {_id: "432", name: "Twitter", developerId: "234"},
        {_id: "234", name: "Amazon", developerId: "345"},
        {_id: "333", name: "MyWebSite", developerId: "123"}
    ];

    // var WEBSITES = require("./website.mock.server");

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);

    function createWebsite(req, res) {
        var userId = req.params.userId;
        var website = req.body;
        for (var i = 0; i < WEBSITES.length; i++) {
            if (WEBSITES[i].developerId === userId && WEBSITES[i].name === website.name) {
                res.status(404).send("This website is already exist.");
                return;
            }
        }
        website._id = Math.round(Math.random() * 1000).toString();
        website.developerId = userId;
        WEBSITES.push(website);
        res.json(website);
    }

    function getWebsitesForUserId(userId) {
        var websites = [];
        for (var i = 0; i < WEBSITES.length; i++) {
            if (WEBSITES[i].developerId === userId) {
                websites.push(WEBSITES[i]);
            }
        }
        return websites;
    }

    function findAllWebsitesForUser(req, res) {
        var userId = req.params['userId'];
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params['websiteId'];
        console.log(websiteId);
        res.json(getWebsiteById(websiteId));
    }


    function getWebsiteById(websiteId) {
        for (var i = 0; i < WEBSITES.length; i++) {
            if (WEBSITES[i]._id === websiteId) {
                return WEBSITES[i];
            }
        }
    }

    function updateWebsite(req, res) {
        var websiteId = req.params['websiteId'];
        var newWebSite = req.body;
        for (var i = 0; i < WEBSITES.length; i++) {
            if (WEBSITES[i]._id === websiteId) {
                WEBSITES[i] = newWebSite;
                break;
            }
        }
        res.json(getWebsitesForUserId(websiteId));
    }


    function deleteWebsite(req, res) {
        var websiteId = req.params['websiteId'];
        for (var i = 0; i < WEBSITES.length; i++) {
            if (WEBSITES[i]._id === websiteId) {
                var userId = WEBSITES[i].developerId;
                WEBSITES.splice(i, 1);
                var websites = getWebsitesForUserId(userId);
                res.send("OK");
                return;
            }
        }
        res.status(404).send("Website with ID: " + websiteId + " cannot be found");
    }
}
