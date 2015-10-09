'use strict';

angular.module('yyPageApp')
  .directive('exampleWidget', function () {
    return {
      templateUrl: 'components/example-widget/example-widget.html',
      controller: function () {
        this.currentWidgetTheme = '000000';
        this.ppTestData = {
          daysCount: '25',
          associateCount: '3',
          cvpCount: '80'
        };
        this.today = new Date();

        this.setColorTheme = function (key) {
          var widgetColorThemes = {
            'primary': '78bde7',
            'success': '5cb85c',
            'info': '5BC0E0',
            'warning': 'f0ad4e',
            'danger': 'd9534f',
            'dark': '000000'
          };
          this.currentWidgetTheme = widgetColorThemes[key];
        };

        this.hexToRgba = function (hexVal, opacity) {
          return 'rgba(' + parseInt(hexVal.substr(0, 2), 16) + ',' + parseInt(hexVal.substr(2, 2), 16) + ',' + parseInt(hexVal.substr(4, 2), 16) + ',' + opacity + ')';
        };

        this.validateDateCount = function (num) {
          this.ppTestData.daysCount = (num.toString().length < 2 ? '0' + num : num ).toString();
        };


        this.greeting = function (date) {
          var greetingMsg;
          if (date.getHours() >= 12) {
            greetingMsg = 'Afternoon';
          } else if (date.getHours() >= 18) {
            greetingMsg = 'Evening';
          } else {
            greetingMsg = 'Morning';
          }
          return greetingMsg;
        };
      },
      controllerAs: 'widgetCtrl',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
