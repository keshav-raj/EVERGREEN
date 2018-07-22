angular.module("milkyWay")
    .controller('deliverCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav) {

      $scope.halfLiter = "22";
      $scope.oneLiter = "22";
      $scope.twoLiter = "22";
      $scope.threeLiter = "22";
    $scope.editorEnabled = false;

    $scope.enableEditor = function() {
      $scope.editorEnabled = true;
      };

    $scope.disableEditor = function() {
      $scope.editorEnabled = false;
    };

    $scope.save = function() {
      $scope.disableEditor();
    };


    });
