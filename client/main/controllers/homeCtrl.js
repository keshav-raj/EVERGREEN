angular.module("milkyWay")
    .controller('homeCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav) {
      $scope.toggleSidenav = buildToggler('closeEventsDisabled');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

      this.fromDate = new Date();
      this.toDate = new Date();
      this.isOpen = false;
    });
