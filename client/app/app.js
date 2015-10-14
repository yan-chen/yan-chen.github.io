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
  })

  .run(function ($state, $rootScope) {
    $rootScope.$state = $state;
    $rootScope.isTouchDevice=function(){
      console.log('ontouchstart' in document.documentElement);
      return 'ontouchstart' in document.documentElement;
    };

    $rootScope.$on('$stateChangeStart', function () {
      $rootScope.isPageLoading = true;
    });
    $rootScope.$on('$stateChangeSuccess', function () {
      $rootScope.isPageLoading = false;
    })
  });

