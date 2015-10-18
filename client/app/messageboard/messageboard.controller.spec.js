'use strict';

describe('Controller: MessageboardCtrl', function () {

  // load the controller's module
  beforeEach(module('yyPageApp'));

  var MessageboardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessageboardCtrl = $controller('MessageboardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
