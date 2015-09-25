'use strict';

angular.module('yyPageApp')
  .directive('exampleWidget', function () {
    return {
      templateUrl: 'components/example-widget/example-widget.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
