angular.module("milkyWay")
.controller('DialogController', function($scope, $stateParams, $state, $mdDialog, items) {

  $scope.delivery = items;
  $scope.deliverItem= function(data){

    console.log($scope.delivery.quantity);

    let custData = Customers.findOne({_id:$stateParams.customerId});
    let price = Price.findOne().value;
    let deliveryPrice = price * $scope.delivery.quantity;
    let deliveryData ={
      customerName: custData.name,
      customerPhone: custData.phoneNo,
      deliverQuantity: $scope.delivery.quantity,
      deliveryTime: data.Time,
      paymentMode: data.paymentType,
      deliveryPrice: deliveryPrice
    }

    Meteor.call('deliverItem', deliveryData, function(err){
      if(!err){
        console.log("successfull");
        $mdDialog.hide();
       $state.go('home');


      }else{
        console.log("Failed ")
      }
    });
  }
});
