angular.module("milkyWay")
    .controller('homeCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav,$mdDialog) {
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



});
