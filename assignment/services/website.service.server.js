module.exports = function (app) {
    const websiteModel = require("../model/website/website.model.server");

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
        console.log('web service server');
        console.log(website);
        websiteModel.createWebsiteForUser(userId, website).then(
            function (responseWebsite) {
                console.log(responseWebsite);
                res.status(200).json(responseWebsite);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }


    function findAllWebsitesForUser(req, res) {
        var userId = req.params['userId'];
        websiteModel.findAllWebsitesForUser(userId).then(
            function (responseWebsite) {
                res.status(200).json(responseWebsite);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params['websiteId'];
        websiteModel.findWebsiteById(websiteId).then(
            function (responseWebsite) {
                res.status(200).json(responseWebsite);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }

    function updateWebsite(req, res) {
        var websiteId = req.params['websiteId'];
        var newWebSite = req.body;
        websiteModel.updateWebsite(websiteId, newWebSite).then(
            function (responseWebsite) {
                res.status(200).json(responseWebsite);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }


    function deleteWebsite(req, res) {
        var websiteId = req.params['websiteId'];
        websiteModel.deleteWebsite(websiteId).then(
            function (status) {
                res.status(200).json(status);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }
}
