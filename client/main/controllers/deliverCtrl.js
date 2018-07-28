angular.module("milkyWay")
    .controller('deliverCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav) {

   $scope.helpers({
     customer: function(){
       //console.log("test"+$stateParams.customerId);
       return Customers.findOne({_id:$stateParams.customerId});
     }
   })

    });
