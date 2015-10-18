'use strict';

angular
  .module('yyPageApp')
  .controller('BlogCtrl', BlogCtrl);

BlogCtrl.$inject = ['InstagramApiServices', 'CurrentInstaUser'];

function BlogCtrl(InstagramApiServices, CurrentInstaUser) {
  var _this = this;
  _this.timelineView = true;
  _this.currentUser = CurrentInstaUser.currentUser;
  _this.currentMedia = CurrentInstaUser.currentMedia;
  _this.nextUrl = CurrentInstaUser.nextUrl || null;

  _this.loadMore = function () {
    InstagramApiServices.loadMore(_this.nextUrl).then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        _this.currentMedia.push(response.data[i]);
      }
      _this.nextUrl = response.pagination.next_url;
    })
  };


}
