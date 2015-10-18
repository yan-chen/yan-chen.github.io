'use strict';

angular.module('yyPageApp')
  .directive('blogTimeline', function () {
    return {
      templateUrl: 'components/blog-timeline/blog-timeline.html',
      scope:{
        'galleries':'=galleries'
      },
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
