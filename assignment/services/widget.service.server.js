module.exports = function (app) {
    const widgetModel = require("../model/widget/widget.model.server");

    // var WIDGETS = [
    //     {
    //         _id: "123",
    //         widgetType: "HEADING",
    //         name: ' ',
    //         pageId: "111",
    //         size: "2",
    //         text: "GIZMODO",
    //         url: "",
    //         width: "",
    //         height: 100,
    //         rows: 0,
    //         class: '',
    //         icon: '',
    //         deletable: false,
    //         formatted: false,
    //         placeholder: ''
    //     },
    //     {
    //         _id: "234",
    //         widgetType: "HEADING",
    //         name: ' ',
    //         pageId: "222",
    //         size: "4",
    //         text: "Lorem ipsum",
    //         url: "",
    //         width: "",
    //         height: 100,
    //         rows: 0,
    //         class: '',
    //         icon: '',
    //         deletable: false,
    //         formatted: false,
    //         placeholder: ''
    //     },
    //     {
    //         _id: "345",
    //         widgetType: "IMAGE",
    //         pageId: "111",
    //         size: "",
    //         text: "",
    //         width: "100%",
    //         url: "http://lorempixel.com/400/200/"
    //     },
    //
    //     {
    //         _id: "567",
    //         widgetType: "HEADING",
    //         name: ' ',
    //         pageId: "333",
    //         size: "4",
    //         text: "Lorem ipsum",
    //         url: "",
    //         width: "",
    //         height: 100,
    //         rows: 0,
    //         class: '',
    //         icon: '',
    //         deletable: false,
    //         formatted: false,
    //         placeholder: ''
    //     },
    //     {
    //         _id: "678",
    //         widgetType: "YOUTUBE",
    //         name: ' ',
    //         pageId: "111",
    //         size: "",
    //         text: "",
    //         url: 'https://www.youtube.com/embed/mFkli0wD4-w',
    //         width: "100%",
    //         height: 100,
    //         rows: 0,
    //         class: '',
    //         icon: '',
    //         deletable: false,
    //         formatted: false,
    //         placeholder: ''
    //     },
    //
    // ];

    var multer = require('multer'); // npm install multer --save
    var upload = multer({dest: __dirname + '/../../src/assets/uploads'});

    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.put("/api/page/:pageId/widget", reorderWidgets);
    app.delete("/api/widget/:widgetId", deleteWidget);
    // UPLOAD
    app.post("/api/upload", upload.single('myFile'), uploadImage);

    function createWidget(req, res) {
        const pageId = req.params.pageId;
        widgetModel
            .createWidget(pageId, req.body)
            .then(function (responseWidget) {
                    res.status(200).json(responseWidget);
                },
                function (error) {
                    res.status(404).json(error);
                });
    }


    function findAllWidgetsForPage(req, res) {
        const pageId = req.params.pageId;
        widgetModel.findAllWidgetsForPage(pageId).then(
            function (responseWidgets) {
                res.status(200).json(responseWidgets);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        widgetModel.findWidgetById(widgetId).then(
            function (responseWidget) {
                res.status(200).json(responseWidget);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }

    function updateWidget(req, res) {
        const widgetId = req.params.widgetId;
        const newWidget = req.body;
        widgetModel.updateWidget(widgetId, newWidget).then(
            function (responseWidget) {
                res.status(200).json(responseWidget);
            },
            function (err) {
                res.status(404).json(err);
            }
        );
    }

    function deleteWidget(req, res) {
        var widgetId = req.params['widgetId'];
        widgetModel.deleteWidget(widgetId).then(
            function (status) {
                res.json(status);
            }, function (err) {
                res.status(404).json(err);
            }
        );
    }


    function array_swap(arr, old_index, new_index) {
        while (old_index < 0) {
            old_index += arr.length;
        }
        while (new_index < 0) {
            new_index += arr.length;
        }
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    }


    function reorderWidgets(req, res) {
        const startIndex = parseInt(req.query["start"]);
        const endIndex = parseInt(req.query["end"]);
        const pageId = req.params.pageId;

        widgetModel
            .reorderWidget(pageId, startIndex, endIndex)
            .then(function (data) {
                res.status(200).json(data);
            }, function (err) {
                res.sendStatus(400).send(err);
            });
    }

    function uploadImage(req, res) {
        console.log(req);
        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;


        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;
        console.log('widget.service.server:upload Image:');
        console.log(websiteId);
        console.log(myFile);

        if (myFile == null) {
            //res.redirect("https://yourheroku.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
            // res.redirect("http://localhost:3200/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
            res.redirect(userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);

            return;
        }

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;


        var widget = {url: "assets/uploads/" + filename};

        var widget;
        for (var i = 0; i < WIDGETS.length; i++) {
            if (WIDGETS[i]._id === widgetId) {
                widget = WIDGETS[i];
            }
        }
        widget.url = 'uploads/' + filename;

        /*widgetModel
          .updateWidget(widgetId, widget)
          .then(function (stats) {
              console.log(stats);
              res.send(200);
            },
            function (err) {
              res.sendStatus(404).send(err);
            });*/

        // res.redirect("https://yourheroku.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
        // return res.json();
        res.redirect("http://localhost:3200/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
        // res.redirect( userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);

    }
}

