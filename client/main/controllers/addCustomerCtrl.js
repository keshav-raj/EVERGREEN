import { Meteor } from 'meteor/meteor';

angular.module("milkyWay")
    .controller('addCustomerCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav) {

      $scope.toggleSidenav = buildToggler('closeEventsDisabled');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }

      $scope.addCustomer= function(){
        //console.log("name:"+$scope.user.custName);
        let customerPhone = '+91'+$scope.user.custNumber;
        if((customerPhone.toString().length<13) || !$scope.user.custName){

        alert("Customer name or number is invalid");

        }else{

        //console.log(customerPhone.toString());
        let customerDetails ={
          name:$scope.user.custName,
          phoneNo:customerPhone.toString()
        }
        Meteor.call('newCustomer', customerDetails, function(err){
          if(!err){
            console.log("Customer added successfully")
            $state.go('home');
          }else{
            console.log("Failed to add customer")
          }
        });
      }

    }

});
