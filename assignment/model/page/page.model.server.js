var mongoose = new require('mongoose');
var pageSchema = require('./page.schema.server');
var pageModel = mongoose.model("pageModel", pageSchema);
var websiteModel = require('../website/website.model.server');
mongoose.set('useFindAndModify', false);

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

module.exports = pageModel;


function createPage(websiteId, page) {
    page._website = websiteId;
    return pageModel.create(page)
        .then(function(responsePage) {
            websiteModel.findById(responsePage._website)
                .then(function(website) {
                    website.pages.push(responsePage);
                    return website.save();
                });
            return responsePage;
        });
}

function findAllPagesForWebsite(websiteId) {
    return websiteModel
        .findById(websiteId)
        .populate('pages').exec();

    // return pageModel.findById({_website: websiteId})
    //     .populate('_website')
    //     .exec();

    // return pageModel.find({_website: websiteId});
}

function findPageById(pageId){
    return pageModel.findById(pageId);
}

function updatePage(pageId, page){
    return pageModel.findByIdAndUpdate(pageId, page);
}

function deletePage(pageId){
    return pageModel.findByIdAndRemove(pageId);
}


