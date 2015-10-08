'use strict';

angular.module('yyPageApp')
  .directive('instagramGalleryTemplate', function () {
    return {
      controller: function (modalService) {
        var url = 'components/instagram-gallery-template/gallery-modal.html';
        var modalClass = 'gallery-modal';
        var _this = this;
        _this.openModal = function (data, index) {
          modalService.openModal(url, data, index,modalClass);
        }
      },
      controllerAs: 'templateCtrl',
      templateUrl: 'components/instagram-gallery-template/instagram-gallery-template.html',
      scope: {
        galleries: '=galleries',
        isReverse: '=isReverse',
        topNum: '=topNum',
        orderVar: '=orderVar'
      },
      restrict: 'EA',
      link: function (scope, element, attrs) {

      }
    };
  });
