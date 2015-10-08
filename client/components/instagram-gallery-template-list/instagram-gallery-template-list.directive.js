'use strict';

angular.module('yyPageApp')
  .directive('instagramGalleryTemplateList', function () {
    return {
      templateUrl: 'components/instagram-gallery-template-list/instagram-gallery-template-list.html',
      scope:{
        galleries:'=galleries',
        isReverse:'=isReverse',
        topNum:'=topNum',
        orderVar:'=orderVar'
      },
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
