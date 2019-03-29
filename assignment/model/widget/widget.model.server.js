var mongoose = new require('mongoose');
var widgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model("widgetModel", widgetSchema);
var pageModel = require('../page/page.model.server');
mongoose.set('useFindAndModify', false);

widgetModel.createWidget = createWidget;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;


module.exports = widgetModel;

function createWidget(pageId, widget) {
    widget._page = pageId;
    return widgetModel.create(widget)
        .then(function (responseWidget) {
            pageModel.findPageById(pageId)
                .then(function (page) {
                    page.widgets.push(responseWidget);
                    page.save();
                });
            return responseWidget;
        });
}

function findAllWidgetsForPage(pageId) {
    // pageModel.findById(pageId)
    //     .then(function (page) {
    //         return page.widgets;
    //     })
    return pageModel.findById(pageId)
        .populate('widgets')
        .then(function (page) {
                return page.widgets;
            }
        )
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
    return widgetModel.findByIdAndUpdate(widgetId, widget);
    // return widgetModel.findByIdAndUpdate(widgetId, widget);
}

function deleteWidget(widgetId) {
    return widgetModel.findByIdAndRemove(widgetId);
}

function reorderWidget(pageId, start, end) {
    return pageModel.findPageById(pageId)
        .then(function (page) {
            const widgetToModify = page.widgets[start];
            page.widgets.splice(start, 1);
            page.widgets.splice(end, 0, widgetToModify);
            return page.save();
        });
}

