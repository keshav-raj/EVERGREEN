angular.module("milkyWay")
    .controller('deliverCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav,$mdDialog) {

   $scope.helpers({
     customer: function(){
       //console.log("test"+$stateParams.customerId);
       return Customers.findOne({_id:$stateParams.customerId});
     },
     Quantities: function(){

     return Quantities.find()

   }
 })

   $scope.deliverItem= function(deliverAmount){
     console.log(deliverAmount);
    var deliverQuantity = deliverAmount.group1;
     let custData = Customers.findOne({_id:$stateParams.customerId});
     let data ={
       customerName: custData.name,
       customerPhone:custData.phoneNo,
         deliverQuantity:deliverQuantity,
     }

     Meteor.call('deliverItem', data, function(err){
       if(!err){
         console.log("successfull");
        $state.go('home');


       }else{
         console.log("Failed ")
       }
     });
   }

   var alert;
  $scope.showDialog = showDialog;
  $scope.items = [1,2,3];

  function showDialog($event) {
    var parentEl = angular.element(document.querySelector('md-content'));
    alert = $mdDialog.alert({
      parent: parentEl,
      targetEvent: $event,
      templateUrl:'client/main/views/deliverModal.html',
        locals: {
          items: $scope.items,
          closeDialog: $scope.closeDialog
        },
        bindToController: true,
        controllerAs: 'ctrl',
        controller: 'DialogController'
    });

    $mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  }
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };



    });
