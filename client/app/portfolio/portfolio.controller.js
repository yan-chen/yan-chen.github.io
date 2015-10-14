'use strict';

angular.module('yyPageApp')
  .controller('PortfolioCtrl', PortfolioCtrl);
PortfolioCtrl.$inject = ['PromoisedMockupExamples','PromoisedCodingExamples'];

function PortfolioCtrl(PromoisedMockupExamples,PromoisedCodingExamples) {

  var _this = this;
  _this.mockUpExamples =PromoisedMockupExamples;
  _this.codingExamples = PromoisedCodingExamples;

}
