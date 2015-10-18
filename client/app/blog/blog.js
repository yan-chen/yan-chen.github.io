'use strict';

angular
  .module('yyPageApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blog', {
        url: '/blog/:instauser',
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'BlogCtrl',
        resolve: {
          CurrentInstaUser: function (InstagramApiServices, $stateParams) {
            var username = $stateParams.instauser;
            var currentInstaUser = {};
            return InstagramApiServices.getUserId(username)
              .then(function (response) {
                if (response.data.length <= 0) {
                  return;
                } else {
                  return InstagramApiServices.getUser(response.data[0].id).then(function (response) {
                    //console.log(response);
                    if (!response.data) {
                      currentInstaUser.errorMessage = response.meta.error_message;
                      currentInstaUser.isPrivate = true;
                    } else {
                      currentInstaUser.currentUser = response.data;
                      return InstagramApiServices.getUserRecentMedia(response.data.id).then(function (response) {
                        currentInstaUser.nextUrl = response.pagination.next_url;
                        currentInstaUser.currentMedia = response.data;
                        currentInstaUser.errorMessage = '';
                        currentInstaUser.isPrivate = false;
                        //console.log(currentInstaUser.nextUrl );
                        //console.log(currentInstaUser);
                        return currentInstaUser;
                      });
                    }
                  });
                }
              });
          }
        }
      });
  });
