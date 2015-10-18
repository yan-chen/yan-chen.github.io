'use strict';

angular.module('yyPageApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blog', {
        url: '/blog',
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'BlogCtrl',
        resolve:{
          myInstagramGalleries:function(InstagramApiServices){
            return InstagramApiServices.getMyMedia20();
          },
          myInstagramAccount:function(InstagramApiServices){
            return InstagramApiServices.getUser(2180465817);
          }
        }
      });
  });
