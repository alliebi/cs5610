module.exports = function (app) {
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
        for (var i = 0; i < PAGES.length; i++) {
            if (PAGES[i].websiteId === page.websiteId && PAGES[i].name === page.name) {
                res.status(404).send("This page has already existed.");
                return;
            }
        }
        page._id = Math.random().toString();
        page.websiteId = websiteId;
        pages.push(page);
        res.json(page);
    }


    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        console.log('wid:' + websiteId);
        var pages = getPagesForWebsiteId(websiteId);
        console.log("server Pages:" );
        console.log(pages);
        res.json(pages);
    }


    function getPagesForWebsiteId(websiteId) {
        const resultSet = [];
        for (var i = 0; i < PAGES.length; i++) {
            if (PAGES[i].websiteId === websiteId) {
                resultSet.push(PAGES[i]);
            }
        }
        return resultSet;
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        var page = getPageForId(pageId);
        res.json(page);
    }

    function getPageForId(pageId) {
        return PAGES.find(function (page) {
            return page._id === pageId;
        });
    }

    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var page = req.body;
        for (var i = 0; i < PAGES.length; i++) {
            if (PAGES[i]._id === pageId) {
                PAGES[i].name = page.name;
                PAGES[i].title = page.title;
            }
        }
        res.json(getPageForId(pageId));
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        for (var i = 0; i < PAGES.length; i++) {
            if (PAGES[i]._id === pageId) {
                var websiteId = PAGES[i].websiteId;
                const j = +i;
                PAGES.splice(j, 1);
                var pages = getPagesForWebsiteId(websiteId);
                res.json(pages);
                return;
            }
        }
    }
}
