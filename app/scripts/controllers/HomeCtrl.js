(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {

      var home = this;
      home.rooms = Room.all;
      home.mainRoom = null;
      home.currentUser = $cookies.get('blocChatCurrentUser');

        home.openRoom = function() {
          var modalInstance = $uibModal.open({
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl as modal'
              });
            }

        home.setRoom = function (room) {
          home.mainRoom = room;
          home.messages = Message.getByRoomId(home.mainRoom.$id);

        }

        home.sentMessage = function () {
          home.newMessage.roomId = home.mainRoom.$id;
          home.newMessage.username = home.currentUser;
          Message.send(home.newMessage);
        }








    }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message',  '$uibModal', '$cookies', HomeCtrl]);
})();
