'use strict';

angular
  .module('yyPageApp')
  .controller('ResumeCtrl', ResumeCtrl);

ResumeCtrl.$inject = ['PromisedWorkHistoryEN','PromisedWorkHistoryCH','PromisedEducationHistoryEN','PromisedEducationHistoryCH','PromisedCombinedHistoryEN'];

function ResumeCtrl(PromisedWorkHistoryEN,PromisedWorkHistoryCH,PromisedEducationHistoryEN,PromisedEducationHistoryCH,PromisedCombinedHistoryEN) {

  this.language = 'en';
  this.workHistory = PromisedWorkHistoryEN;
  this.educationHistory = PromisedEducationHistoryEN;
  this.combinedHistory = PromisedCombinedHistoryEN;
  this.timelineView=true;
}
