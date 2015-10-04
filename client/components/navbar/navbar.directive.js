'use strict';

angular
  .module('yyPageApp')
  .directive('navbar', navbar);

navbar.$inject = [];

function navbar() {
  return {
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'EA',
    controller: 'NavbarCtrl'
  };
}
