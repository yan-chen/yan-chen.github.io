'use strict';

angular.module('yyPageApp')
  .directive('instagramGalleryTemplate', function () {
    return {
      templateUrl: 'components/instagram-gallery-template/instagram-gallery-template.html',
      scope:{
        galleries:'=galleries',
        isReverse:'=isReverse'
      },
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
