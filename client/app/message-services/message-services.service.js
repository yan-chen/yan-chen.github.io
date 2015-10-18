'use strict';

angular.module('yyPageApp')
  .factory('messageServices', messageServices);

messageServices.$inject = ['$firebaseArray','$firebaseObject'];

function messageServices($firebaseArray,$firebaseObject) {

  var _this =this;
  // create a reference to the database location where we will store our data
  //var randomRoomId = Math.round(Math.random() * 100000000);
  //var ref = new Firebase("https://docs-sandbox.firebaseio.com/af/intro/demo/" + randomRoomId);

  var ref = new Firebase("https://yan-chen.firebaseio.com");

  console.log($firebaseObject(ref))
  console.log($firebaseArray(ref))


  _this.data = $firebaseObject(ref);
  // this waits for the data to load and then logs the output. Therefore,
  // data from the server will now appear in the logged output. Use this with care!
  _this.data.$loaded()
    .then(function () {
      console.log(_this.data);
    })
    .catch(function (err) {
      console.error(err);
    });


  // this uses AngularFire to create the synchronized array
  return $firebaseArray(ref);

}
