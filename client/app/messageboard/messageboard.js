'use strict';

angular.module('yyPageApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('messageboard', {
        url: '/messageboard',
        templateUrl: 'app/messageboard/messageboard.html',
        controller: 'MessageboardCtrl',
        controllerAs: 'MessageCtrl'
      });
  });
