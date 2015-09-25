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
      'title': '|'
    },
    {
      'title': 'Portfolio',
      'icon': 'fa fa-folder-open',
      'state': 'portfolio'
    },
    {
      'title': '|'
    },
    {
      'title': 'Gallery',
      'icon': 'fa fa-image',
      'state': 'gallery'
    }
  ];

  this.isCollapsed = true;

}
