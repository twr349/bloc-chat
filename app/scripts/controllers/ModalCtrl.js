(function() {
  function ModalCtrl(Room, $uibModalInstance) {

    var modal = this;



      modal.cancel = function() {
        $uibmodalInstance.close();
      }



  }

    angular
      .module('blocChat')
      .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
