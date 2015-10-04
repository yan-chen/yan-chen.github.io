'use strict';

angular.module('yyPageApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'app/gallery/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs:'GalleryCtrl',
        resolve:{
          myInstagramGalleries:function(InstagramApiServices){
            return InstagramApiServices.getMyMedia();
          },
          myInstagramAccount:function(InstagramApiServices){
            return InstagramApiServices.getUser(2180465817);
          }
        }
      });
  });
