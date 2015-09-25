'use strict';

angular.module('yyPageApp')
  .directive('instagramGalleryTemplate', function () {
    return {
      templateUrl: 'components/instagram-gallery-template/instagram-gallery-template.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
