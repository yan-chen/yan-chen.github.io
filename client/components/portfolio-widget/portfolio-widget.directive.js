'use strict';

angular
  .module('yyPageApp')
  .directive('portfolioWidget', portfolioWidget);

portfolioWidget.$inject = [];

function portfolioWidget() {
  return {
    controller:function(modalService){
      this.openModal=modalService.openModal;
    },
    controllerAs:'widgetCtrl',
    templateUrl: 'components/portfolio-widget/portfolio-widget.html',
    scope: {
      'demos': '=demos'
    },
    restrict: 'EA',
    link: function (scope, element, attrs) {
      scope.isImageOnly = attrs.imageOnly? true:false;
      scope.sectionTitle = attrs.sectionTitle;
      //scope.isTouchDevice = !!('ontouchstart' in window);
      //console.log(scope.isTouchDevice)
      scope.setCurrentDemo = function (demo) {
        scope.currentDemo = demo;
      };
    }
  };
}
