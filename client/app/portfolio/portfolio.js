'use strict';

angular
  .module('yyPageApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'PortfolioCtrl',
        resolve: {
          PromoisedMockupExamples: function (dataService) {
            return dataService.getData('assets/data/examples_mockups.json');
          },
          PromoisedCodingExamples: function (dataService) {
            return dataService.getData('assets/data/examples_coding.json');
          }

        }
      })
  });
