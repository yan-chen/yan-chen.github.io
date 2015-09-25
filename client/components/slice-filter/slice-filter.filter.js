'use strict';

angular
  .module('yyPageApp')
  .filter('sliceFilter', sliceFilter);

function sliceFilter() {
  return function (arr, start, end) {
    return (arr || []).slice(start, end);
  };
}
