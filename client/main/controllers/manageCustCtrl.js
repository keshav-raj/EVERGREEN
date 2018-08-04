angular.module("milkyWay")
    .controller('manageCustCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav,$mdDialog) {
      $scope.toggleSidenav = buildToggler('closeEventsDisabled');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

      $scope.helpers({
        Customers: function(){

        return Customers.find()

      }
    });



});
