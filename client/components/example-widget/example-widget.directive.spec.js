'use strict';

describe('Directive: exampleWidget', function () {

  // load the directive's module and view
  beforeEach(module('yyPageApp'));
  beforeEach(module('components/example-widget/example-widget.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<example-widget></example-widget>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the exampleWidget directive');
  }));
});
