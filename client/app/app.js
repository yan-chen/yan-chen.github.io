'use strict';

angular
  .module('yyPageApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'akoenig.deckgrid'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/about');

    $locationProvider.html5Mode(true);

    //$httpProvider.defaults.useXDomain = true;
  });
