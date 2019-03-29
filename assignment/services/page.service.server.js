module.exports = function (app) {
    const pageModel = require("../model/page/page.model.server");

    const PAGES = [
        {_id: "111", name: "Post 1", websiteId: "321", description: "Lorem"},
        {_id: "222", name: "Post 2", websiteId: "432", description: "Lorem"},
        {_id: "333", name: "Post 3", websiteId: "321", description: "Lorem"}
    ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var page = req.body;
        console.log('response');
        pageModel.createPage(websiteId, page).then(
            function (responsePage) {
                console.log('page.service.server');
                console.log(responsePage);
                res.status(200).json(responsePage);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        pageModel.findAllPagesForWebsite(websiteId).then(
            function (responsePage) {
                res.status(200).json(responsePage);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }

    function findPageById(req, res) {
        const pageId = req.params.pageId;
        pageModel.findPageById(pageId).then(
            function (responsePage) {
                res.status(200).json(responsePage);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }

    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var page = req.body;
        pageModel.updatePage(pageId, page).then(
            function (responsePage) {
                res.status(200).json(responsePage);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        pageModel.deletePage(pageId).then(
            function (responsePage) {
                res.status(200).json(responsePage);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }
}
