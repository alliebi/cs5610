module.exports = function (app) {
    var WIDGETS = [
        {
            _id: "123",
            widgetType: "HEADING",
            name: ' ',
            pageId: "111",
            size: "2",
            text: "GIZMODO",
            url: "",
            width: "",
            height: 100,
            rows: 0,
            class: '',
            icon: '',
            deletable: false,
            formatted: false,
            placeholder: ''
        },
        {
            _id: "234",
            widgetType: "HEADING",
            name: ' ',
            pageId: "222",
            size: "4",
            text: "Lorem ipsum",
            url: "",
            width: "",
            height: 100,
            rows: 0,
            class: '',
            icon: '',
            deletable: false,
            formatted: false,
            placeholder: ''
        },
        {
            _id: "345",
            widgetType: "IMAGE",
            pageId: "111",
            size: "",
            text: "",
            width: "100%",
            url: "http://lorempixel.com/400/200/"
        },

        {
            _id: "567",
            widgetType: "HEADING",
            name: ' ',
            pageId: "333",
            size: "4",
            text: "Lorem ipsum",
            url: "",
            width: "",
            height: 100,
            rows: 0,
            class: '',
            icon: '',
            deletable: false,
            formatted: false,
            placeholder: ''
        },
        {
            _id: "678",
            widgetType: "YOUTUBE",
            name: ' ',
            pageId: "111",
            size: "",
            text: "",
            url: 'https://www.youtube.com/embed/mFkli0wD4-w',
            width: "100%",
            height: 100,
            rows: 0,
            class: '',
            icon: '',
            deletable: false,
            formatted: false,
            placeholder: ''
        },

    ];

    var multer = require('multer'); // npm install multer --save
    var upload = multer({dest: __dirname + '/../../src/assets/uploads'});


    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.put("/api/page/:pageId/widget", reorderWidgets);
    app.delete("/api/widget/:widgetId", deleteWidget);
    //UPLOAD
    app.post("/api/upload", upload.single('myFile'), uploadImage);

    function createWidget(req, res) {
        const widget = req.body;
        const pageId = req.params.pageId;
        widget._id = Math.round(Math.random() * 1000).toString();
        widget.pageId = pageId;
        WIDGETS.push(widget);
        res.json(widget);
    }

    function getWidgetsForPage(pageId) {
        const ans = [];
        for (let i = 0; i < WIDGETS.length; i++) {
            if (WIDGETS[i].pageId === pageId) {
                ans.push(WIDGETS[i]);
            }
        }
        return ans;
    }

    function findAllWidgetsForPage(req, res) {
        const pageId = req.params.pageId;
        res.json(getWidgetsForPage(pageId));
    }

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        for (const widget of WIDGETS) {
            console.log(widget);
            if (widget._id === widgetId) {
                console.log(widget);
                res.json(widget);
                return;
            }
        }

    }

    function updateWidget(req, res) {
        widgetId = req.params.widgetId;
        newWidget = req.body;
        for (var i = 0; i < WIDGETS.length; i++) {
            if (WIDGETS[i]._id === widgetId) {
                var pageId = WIDGETS[i].pageId;
                if (WIDGETS[i].widgetType === 'HEADING') {
                    // @ts-ignore
                    WIDGETS[i].size = newWidget.size;
                    // @ts-ignore
                    WIDGETS[i].text = newWidget.text;
                } else if (WIDGETS[i].widgetType === 'IMAGE') {
                    // @ts-ignore
                    WIDGETS[i].width = newWidget.width;
                    // @ts-ignore
                    WIDGETS[i].url = newWidget.url;
                } else if (WIDGETS[i].widgetType === 'YOUTUBE') {
                    // @ts-ignore
                    WIDGETS[i].width = newWidget.width;
                    // @ts-ignore
                    WIDGETS[i].url = newWidget.url;
                }
                res.json(findAllWidgetsForPage(pageId));
                return;
            }
        }

    }

    function deleteWidget(req, res) {
        var widgetId = req.params['widgetId'];
        for (var i = 0; i < WIDGETS.length; i++) {
            if (WIDGETS[i]._id === widgetId) {
                WIDGETS.splice(i, 1);
                res.json("OK");
                return;
            }
        }
        res.status(404).json("Widget with ID: " + widgetId + " cannot be found");
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

        var startIndex = parseInt(req.query["start"]);
        var endIndex = parseInt(req.query["end"]);

        array_swap(WIDGETS, startIndex, endIndex);
        res.sendStatus(200);

        /* var pageId = req.params.pageId;
         var startIndex = parseInt(req.query.start);
         var endIndex = parseInt(req.query.end);
         widgetModel
           .reorderWidgets(pageId, startIndex, endIndex)
           .then(function (stats) {
             res.send(200);
           }, function (err) {
             res.sendStatus(400).send(err);
           });
     */
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

