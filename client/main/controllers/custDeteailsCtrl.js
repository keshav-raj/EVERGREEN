angular.module("milkyWay")
    .controller('custDeteailsCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav) {

      $scope.helpers({
        customer: function(){
          //console.log("test"+$stateParams.customerId);
          return Customers.findOne({_id:$stateParams.customerId});
        }
    })

    $scope.editorEnabled = false;

    $scope.enableEditor = function() {
      $scope.editorEnabled = true;
      $scope.tempName = $scope.customer.name;
      $scope.tempPhoneNo = parseInt($scope.customer.phoneNo);
      };

    $scope.disableEditor = function() {
      $scope.editorEnabled = false;

    };

    $scope.save = function() {
      $scope.disableEditor();
      $scope.customer.name=$scope.tempName;
      $scope.customer.phoneNo=$scope.tempPhoneNo;
    };
    $scope.updateCustomer= function(){
      let data = {
        customerId : $stateParams.customerId,
        name : $scope.tempName,
        number : $scope.tempPhoneNo,
      }

      Meteor.call('UpdateCustomer',data, function(err){
        if(!err){
          console.log("successfully");


        }else{
          console.log("customer")
        }
      });

      $scope.disableEditor();
    }
    $scope.deleteCustomer= function(){
      let data = {
        customerId : $stateParams.customerId,
      }
        console.log("delete Work");


      Meteor.call('deleteCustomer',data, function(err){
        if(!err){
          console.log("successfully");
          $state.go("home");

        }else{
          console.log("customer")
        }
      });
    }


    });
