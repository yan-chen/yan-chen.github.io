'use strict';

angular.module('yyPageApp')
  .directive('resumePanel', function () {
    return {
      templateUrl: 'components/resume-panel/resume-panel.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });