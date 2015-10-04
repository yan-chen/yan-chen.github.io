'use strict';

angular
  .module('yyPageApp')
  .controller('GalleryCtrl', GalleryCtrl);

GalleryCtrl.$inject = ['InstagramApiServices', 'myInstagramGalleries', 'myInstagramAccount'];

function GalleryCtrl(InstagramApiServices, myInstagramGalleries, myInstagramAccount) {

  var _this = this;
  console.log(myInstagramGalleries.data);
  _this.isGridView = true;
  _this.reverseOrder = null;
  _this.allMyMedia = myInstagramGalleries.data;
  _this.myAccount = myInstagramAccount.data;

  _this.currentUser = _this.myAccount;
  _this.currentMedia = _this.allMyMedia;

  _this.changeUser = function (username) {
    return InstagramApiServices.getUserId(username).then(function (response) {

      InstagramApiServices.getUser(response.data[0].id).then(function (response) {
        _this.currentUser = response.data;
        InstagramApiServices.getUserRecentMedia(response.data.id).then(function (response) {
          _this.currentMedia = response.data;
          console.log(_this.currentUser);
          console.log(_this.currentMedia);
        });
      });
    });
  }


}
