angular.module("milkyWay")
    .controller('priceCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav) {


      $scope.oneLiter = 22;

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
