'use strict';

angular.module('yyPageApp')
  .directive('resumeTimeline', function () {
    return {
      templateUrl: 'components/resume-timeline/resume-timeline.html',
      scope:{
        'items':'=items'
      },
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
