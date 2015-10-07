'use strict';

describe('Directive: portfolioWidget', function () {

  // load the directive's module and view
  beforeEach(module('yyPageApp'));
  beforeEach(module('components/portfolio-widget/portfolio-widget.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<portfolio-widget></portfolio-widget>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the portfolioWidget directive');
  }));
});