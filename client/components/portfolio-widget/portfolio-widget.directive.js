'use strict';

angular
  .module('yyPageApp')
  .directive('portfolioWidget', portfolioWidget);

portfolioWidget.$inject = [];

function portfolioWidget() {
  return {
    controller:function(modalService){
      var url='components/portfolio-widget/modal-template.html';
      var modalClass='portfolio-demo-modal';
      this.openModal=function(data){
        modalService.openModal(url,data,null,modalClass);
      }
    },
    controllerAs:'widgetCtrl',
    templateUrl: 'components/portfolio-widget/portfolio-widget.html',
    scope: {
      'demos': '=demos'
    },
    restrict: 'EA',
    link: function (scope, element, attrs) {
      //scope.isTouchDevice = !!('ontouchstart' in window);
      //console.log(scope.isTouchDevice)
      scope.setCurrentDemo = function (demo) {
        scope.currentDemo = demo;
      };
    }
  };
}
