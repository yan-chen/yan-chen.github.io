'use strict';

angular
  .module('yyPageApp')
  .controller('BlogCtrl', BlogCtrl);

BlogCtrl.$inject=['InstagramApiServices', 'myInstagramGalleries', 'myInstagramAccount'];

function BlogCtrl(InstagramApiServices, myInstagramGalleries, myInstagramAccount) {
    var _this = this;
    _this.timelineView = true;


    var _this = this;
    _this.isGridView = true;
    _this.reverseOrder = null;
    _this.isInfoCollapsed = true;
    _this.topNum =null;
    _this.allMyMedia = myInstagramGalleries.data;
    _this.nextUrl = myInstagramGalleries.pagination.next_url || null;
    _this.myAccount = myInstagramAccount.data;
  console.log(_this.myAccount);


    _this.currentUser = _this.myAccount;
    _this.currentMedia = _this.allMyMedia;

    _this.searchUser = function (username) {
      return InstagramApiServices.getUserId(username)
        .then(function (response) {
          //var temp = [];
          //for (var i=0; i<10; i++){
          //  temp.push(response.data[i].username);
          //}
          //return temp;
          return response.data.slice(0, 9);
        });
    };

    _this.changeUser = function (user) {
      var username;
      if (angular.isObject(user)) {
        username = user.username;
      } else {
        username = user;
      }
      return InstagramApiServices.getUserId(username)
        .then(function (response) {
          if (response.data.length <= 0) {
            return;
          } else {

            InstagramApiServices.getUser(response.data[0].id).then(function (response) {
              console.log(response);
              if (!response.data) {
                _this.errorMessage = response.meta.error_message;
                _this.isPrivate = true;
              } else {
                _this.currentUser = response.data;
                InstagramApiServices.getUserRecentMedia(response.data.id).then(function (response) {
                  _this.nextUrl = response.pagination.next_url;
                  _this.currentMedia = response.data;
                  _this.errorMessage = '';
                  _this.isPrivate = false;
                  console.log(response);
                });
              }
            });

          }
        });
    };

    _this.loadMore = function () {
      InstagramApiServices.loadMore(_this.nextUrl).then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          _this.currentMedia.push(response.data[i]);
        }
        _this.nextUrl = response.pagination.next_url;
      })
    };



  }
