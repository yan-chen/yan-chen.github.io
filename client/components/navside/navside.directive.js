'use strict';

angular.module('yyPageApp')
  .directive('navside', function () {
    return {
      templateUrl: 'components/navside/navside.html',
      restrict: 'EA',
      controller: 'NavbarCtrl',
      controllerAs:'NavCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
