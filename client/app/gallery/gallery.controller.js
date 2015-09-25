'use strict';

angular
  .module('yyPageApp')
  .controller('GalleryCtrl', GalleryCtrl);

GalleryCtrl.$inject = ['myInstagramGalleries'];

function GalleryCtrl(myInstagramGalleries) {

console.log(myInstagramGalleries.data)
this.allMyMedia = myInstagramGalleries.data;

  //----using instafeed plugin -----
  //$scope.feed = new Instafeed({
  //  get: 'user',
  //  userId: 2180465817,
  //  accessToken: '2180465817.467ede5.b539e364139049fdb1e1637a81337a61',
  //  //template:"<div instagram-gallery-template=''></div>"
  //  template: '<div class="gallery-thumb-box col-xs-4 col-sm-4 col-md-3 col-lg-2">' +
  //  '<a href="{{link}}"><img src="{{image}}" class="full-width"/></a>' +
  //  '<div class="gallery-thumb-caption">{{location}}&nbsp;<br/>' +
  //  '<p><i class="fa fa-heart-o text-red"></i> {{likes}}</p></div>' +
  //  '</div>'
  //});
  //$scope.feed.run();

}
