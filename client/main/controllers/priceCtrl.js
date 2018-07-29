angular.module("milkyWay")
    .controller('priceCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav) {

      $scope.helpers({
        prices: function(){
          return Price.find();
        }
    })

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
    $scope.addPrice= function(){
      //console.log("name:"+$scope.user.custName);
      var Price = $scope.oneLiter;
      console.log(Price);
      $scope.disableEditor();
      let data = {
        value : Price,
        priceAvailable : true,
      }

      Meteor.call('addPrice',data, function(err){
        if(!err){
          console.log("successfully")

        }else{
          console.log("customer")
        }
      });
    }


    });
