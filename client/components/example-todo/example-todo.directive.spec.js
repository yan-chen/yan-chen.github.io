'use strict';

describe('Directive: exampleTodo', function () {

  // load the directive's module and view
  beforeEach(module('yyPageApp'));
  beforeEach(module('components/example-todo/example-todo.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<example-todo></example-todo>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the exampleTodo directive');
  }));
});
