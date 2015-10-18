'use strict';

angular
  .module('yyPageApp')
  .controller('MessageboardCtrl', MessageboardCtrl);

MessageboardCtrl.$inject = ['messageServices', '$firebaseObject'];

function MessageboardCtrl(messageServices, $firebaseObject) {
  var _this = this;


  var ref = new Firebase("https://yan-chen.firebaseio.com");
  // download physicsmarie's profile data into a local object
  // all server changes are applied in realtime
  _this.profile = $firebaseObject(ref.child('profiles').child('phsyicsmarie'));
  _this.randomNumber = (Math.round(Math.random() * 10)/10)*100000;


  //_this.user = "Guest " + Math.round(Math.random() * 100);
  _this.user = "Guest";
  _this.contact = "";

  // we add chatMessages array to the scope to be used in our ng-repeat
  _this.messages = messageServices;

  // a method to create new messages; called by ng-submit
  _this.addMessage = function () {
    // calling $add on a synchronized array is like Array.push(),
    // except that it saves the changes to our database!
    _this.messages.$add({
      from: _this.user,
      contact:_this.contact,
      content: _this.message
    });

    // reset the message input
    _this.message = "";
  };

  // if the messages are empty, add something for fun!
  //_this.messages.$loaded(function () {
  //  if (_this.messages.length === 0) {
  //    _this.messages.$add({
  //      from: "Firebase Docs",
  //      content: "Hello world!"
  //    });
  //  }
  //});

}
