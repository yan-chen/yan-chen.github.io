'use strict';

angular
  .module('yyPageApp')
  .controller('NavbarCtrl', NavbarCtrl);

NavbarCtrl.$inject = [];

function NavbarCtrl() {
  this.menu = [
    {
      'title': 'About',
      'icon': 'fa fa-home',
      'state': 'about'
    },
    {
      'title': 'Portfolio',
      'icon': 'fa fa-folder-open',
      'state': 'portfolio'
    },
    {
      'title': 'Gallery',
      'icon': 'fa fa-image',
      'state': 'gallery'
    }
  ];

  this.isAsideVisible = false;
  this.toggleAsideNav = function () {
    this.isAsideVisible = !this.isAsideVisible;
    console.log(this.isAsideVisible);
  };

}
