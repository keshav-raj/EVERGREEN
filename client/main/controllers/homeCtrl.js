angular.module("milkyWay")
    .controller('homeCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav,$mdDialog,$translate) {
      $scope.trans = function(key) {
     $translate.use(key);
   };

      $scope.toggleSidenav = buildToggler('closeEventsDisabled');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }



      this.fromDate = new Date();
      this.toDate = new Date();
      this.isOpen = false;

      $scope.helpers({
        Customers: function(){

        return Customers.find()

      }
    });




   var alert;
 $scope.translateOptions = function ($event) {
    console.log("here");

    var parentEl = angular.element(document.querySelector('md-content'));
    alert = $mdDialog.alert({
      parent: parentEl,
      targetEvent: $event,
      templateUrl:'client/main/views/languageModal.html',
        locals: {
          closeDialog: $scope.closeDialog
        },
        bindToController: true,
        controllerAs: 'ctrl',
        controller: 'LanguageDialogController'
    });

    $mdDialog.show( alert )

  }
  $scope.closeDialog = function() {
    $mdDialog.hide();

  };



});
