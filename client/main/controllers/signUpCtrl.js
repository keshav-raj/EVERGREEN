angular.module("milkyWay")
    .controller('signUpCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav) {

      $scope.toggleSidenav = buildToggler('closeEventsDisabled');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }

    });
