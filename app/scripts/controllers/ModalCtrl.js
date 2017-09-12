(function() {
  function ModalCtrl(Room, $uibModalInstance, $cookies) {

    var modal = this;



      modal.cancel = function () {
        $uibModalInstance.close();
      };

      modal.makeRoom = function () {
        Room.add(modal.newRoom);
        $uibModalInstance.close();
      };

      modal.makeUsername = function () {
        $cookies.put('blocChatCurrentUser', modal.username);
        $uibModalInstance.close();
      };


  }

    angular
      .module('blocChat')
      .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
