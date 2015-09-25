'use strict';

describe('Filter: sliceFilter', function () {

  // load the filter's module
  beforeEach(module('yyPageApp'));

  // initialize a new instance of the filter before each test
  var sliceFilter;
  beforeEach(inject(function ($filter) {
    sliceFilter = $filter('sliceFilter');
  }));

  it('should return the input prefixed with "sliceFilter filter:"', function () {
    var text = 'angularjs';
    expect(sliceFilter(text)).toBe('sliceFilter filter: ' + text);
  });

});
