'use strict';

describe('Service: messageServices', function () {

  // load the service's module
  beforeEach(module('yyPageApp'));

  // instantiate service
  var messageServices;
  beforeEach(inject(function (_messageServices_) {
    messageServices = _messageServices_;
  }));

  it('should do something', function () {
    expect(!!messageServices).toBe(true);
  });

});
