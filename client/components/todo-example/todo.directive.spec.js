'use strict';

describe('Directive: todo', function () {

  // load the directive's module and view
  beforeEach(module('yyPageApp'));
  beforeEach(module('components/todo-example/todo-example.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<todo-example></todo-example>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the todo-example directive');
  }));
});
