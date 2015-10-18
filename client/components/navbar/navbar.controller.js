'use strict';

angular
  .module('yyPageApp')
  .controller('NavbarCtrl', NavbarCtrl);

NavbarCtrl.$inject = [];

function NavbarCtrl() {
  this.menu = [
    {
      'title': ' About',
      //'icon': 'fa fa-home',
      'icon': 'glyphicon glyphicon-home',
      'state': 'about'
    },
    {
      'title': ' Portfolio',
      //'icon': 'fa fa-folder-open',
      'icon': 'glyphicon glyphicon-folder-open',
      'state': 'portfolio'
    },
    {
      'title': ' Gallery',
      //'icon': 'fa fa-image',
      'icon': 'glyphicon glyphicon-picture',
      'state': 'gallery'
    },
    {
      'title': ' Contact',
      'icon': 'glyphicon glyphicon-comment',
      'state': 'messageboard'
    }
  ];

  this.isAsideVisible = false;
  this.toggleAsideNav = function () {
    this.isAsideVisible = !this.isAsideVisible;
  };

}
