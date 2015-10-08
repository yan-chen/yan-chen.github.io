'use strict';

describe('Service: InstagramApiServices', function () {

  // load the service's module
  beforeEach(module('yyPageApp'));

  // instantiate service
  var InstagramApiServices;
  beforeEach(inject(function (InstagramApiServices) {
    InstagramApiServices = _InstagramApiServices_;
  }));

  it('should do something', function () {
    expect(!!InstagramApiServices).toBe(true);
  });

});
