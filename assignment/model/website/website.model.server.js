var mongoose = new require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("websiteModel", websiteSchema);
var userModel = require('../user/user.model.server');
mongoose.set('useFindAndModify', false);

websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;


function createWebsiteForUser(userId, website){
    // website._user = userId;
    // return websiteModel.create(website).then(
    //     function(responseWebsite){
    //         userModel.findUserById(userId).then(
    //             function(responseUser){
    //                 responseUser.websites.push(responseWebsite);
    //             }
    //         );
    //         return responseWebsite;
    //     }
    // );

    website._user = userId;
    console.log(userId);
    return websiteModel.create(website)
        .then(function(responseWebsite) {
            console.log('response');
            userModel.findUserById(responseWebsite._user)
                .then(function(user) {
                    user.websites.push(responseWebsite);
                    return user.save();
                });
            console.log(responseWebsite);
            return responseWebsite;
        });
    console.log('response');
}

function findAllWebsitesForUser(userId){
    // return userModel.find({_id: userId}).populate('websites').exec();

    return websiteModel.find({_user: userId});

    // return websiteModel.find({_user: userId})
    //     .populate('_user')
    //     .exec();
}

function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
    return websiteModel.findByIdAndUpdate(websiteId, website);
}

function deleteWebsite(websiteId) {
    return websiteModel.findByIdAndRemove(websiteId);
}
