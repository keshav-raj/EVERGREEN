angular.module("milkyWay")
    .controller('deliverCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav,$mdDialog, $window) {

   $scope.helpers({
     customer: function(){
       //console.log("test"+$stateParams.customerId);
       return Customers.findOne({_id:$stateParams.customerId});
     },
     Quantities: function(){

     return Quantities.find()

   }
 })



   var alert;
  $scope.showDialog = showDialog;

  function showDialog($event, delivery) {

    $scope.delivery = delivery;
    var parentEl = angular.element(document.querySelector('md-content'));
    alert = $mdDialog.alert({
      parent: parentEl,
      targetEvent: $event,
      templateUrl:'client/main/views/deliverModal.html',
        locals: {
          items: $scope.delivery,
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

  $scope.deliver = function($event, delivery){
    if(!delivery){
      $window.alert("Please select quantity");
    }else {
      showDialog($event, delivery);
    }
  }


    });
