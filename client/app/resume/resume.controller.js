'use strict';

angular
  .module('yyPageApp')
  .controller('ResumeCtrl', ResumeCtrl);

ResumeCtrl.$inject = ['PromisedWorkHistoryEN','PromisedWorkHistoryCH','PromisedEducationHistoryEN','PromisedEducationHistoryCH'];

function ResumeCtrl(PromisedWorkHistoryEN,PromisedWorkHistoryCH,PromisedEducationHistoryEN,PromisedEducationHistoryCH) {

  this.language = 'en';
  this.workHistory = PromisedWorkHistoryEN;
  this.educationHistory = PromisedEducationHistoryEN;
}
