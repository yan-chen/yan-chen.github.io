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

  function openModal(data, modalClass,backdropClass) {
    var modalInstance = $modal.open({
      templateUrl: 'components/portfolio-widget/modal-template.html',
      controller: ModalInstanceCtrl,
      controllerAs: 'ModalCtrl',
      backdrop: true,
      backdropClass: backdropClass,
      windowClass: modalClass,
      resolve: {
        data: function () {
          return data;
        }
      }
    });
  }

  function ModalInstanceCtrl($modalInstance, data) {
    this.data = data;

    this.ok = function () {
      $modalInstance.close();
    };

    this.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }

}
