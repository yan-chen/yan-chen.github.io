'use strict';

angular
  .module('yyPageApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'akoenig.deckgrid',
    'LocalStorageModule'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.when('/','/about');
    $urlRouterProvider.otherwise('/about');

    //$locationProvider.html5Mode(true);
    //$httpProvider.defaults.useXDomain = true;
  });
