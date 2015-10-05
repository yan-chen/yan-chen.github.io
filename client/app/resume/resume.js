'use strict';

angular.module('yyPageApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/resume/resume.html',
        controller: 'ResumeCtrl as ResumeCtrl',
        resolve: {
          PromisedWorkHistoryEN: function (dataService) {
            return dataService.getData('assets/data/work_history_en.json');
          },
          PromisedWorkHistoryCH: function (dataService) {
            return dataService.getData('assets/data/work_history_ch.json');
          },
          PromisedEducationHistoryEN: function (dataService) {
            return dataService.getData('assets/data/education_history_en.json');
          },
          PromisedEducationHistoryCH: function (dataService) {
            return dataService.getData('assets/data/education_history_ch.json');
          },
          PromisedCombinedHistoryEN: function (dataService) {
            return dataService.getData('assets/data/combined_history_en.json');
          }
        }
      });
  });
