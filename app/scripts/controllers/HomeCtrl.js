(function() {
    function HomeCtrl(Room, Message, $uibModal) {

      var home = this;
      home.rooms = Room.all;
      home.mainRoom = null;


        home.openRoom = function() {
          var modalInstance = $uibModal.open({
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl as modal'
              });
            }

        home.setRoom = function (room) {
          home.mainRoom = room;
          home.messages = Message.getByRoomId(home.mainRoom.$id);
          //just for sample messages
          //home.setMessage = Message.sampleMessage();
          //console.log(home.setMessage);
          //console.log(message);
        };









    }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
