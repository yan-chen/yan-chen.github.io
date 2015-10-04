'use strict';

describe('Directive: navside', function () {

  // load the directive's module and view
  beforeEach(module('yyPageApp'));
  beforeEach(module('components/navside/navside.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navside></navside>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the navside directive');
  }));
});