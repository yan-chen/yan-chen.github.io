'use strict';

angular
  .module('yyPageApp')
  .service('modalService', modalService);


modalService.$inject = ['$modal'];

function modalService($modal) {
  // Service logic
  // ...

  var modal = {
    openModal: openModal
  };

  // Public API here
  return modal;

  //------------------------------------

  function openModal(url,data,index, modalClass,backdropClass) {
    var modalInstance = $modal.open({
      templateUrl: url,
      controller: ModalInstanceCtrl,
      controllerAs: 'ModalCtrl',
      backdrop: true,
      backdropClass: backdropClass,
      windowClass: modalClass,
      resolve: {
        data: function () {
          return data;
        },
        index:index
      }
    });
  }

  function ModalInstanceCtrl($modalInstance, data,index) {
    this.data = data;
    this.index=index;
    this.ok = function () {
      $modalInstance.close();
    };

    this.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }

}
