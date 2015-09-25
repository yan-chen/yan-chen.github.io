'use strict';

angular
  .module('yyPageApp')
  .service('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http) {

  this.getData = function (url) {
    return $http({
      method: 'GET',
      url: url,
      headers: {'Content-Type': 'application/json'},
      cache: true
    })
      .then(function (response) {
        return response.data;
      }, function (result) {
        console.log("The request failed: ", result);
      });
  };

}
