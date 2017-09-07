(function() {
    function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);
      //just for sample messages

      //just for sample messages


      //just for sample messages
      //Message.sampleMessage = function (roomId) {

          //return messages;

      //};


      Message.getByRoomId = function (roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

      };

      return Message

    };

    angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', Message]);
})();
