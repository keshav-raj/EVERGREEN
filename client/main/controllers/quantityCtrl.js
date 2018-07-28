angular.module("milkyWay")
    .controller('quantityCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav) {

      $scope.helpers({
        Quantities: function(){

        return Quantities.find()

      }
    });

      $scope.addQuantities= function(){

        let data ={
            value:$scope.data.quantity
        }

        Meteor.call('addQuantity', data, function(err){
          if(!err){
            console.log("successfull");
            $scope.data.quantity= null;

          }else{
            console.log("Failed ")
          }
        });
      }


      $scope.deleteQuantities= function(Quantity){
        console.log(Quantity,Quantity._id);
        var itemToDelete = Quantity._id;
        Meteor.call('deleteQuantity', itemToDelete, function(err){
          if(!err){
            console.log("successfull");

          }else{
            console.log("Failed ")
          }
        });
      }


    });
