angular.module("milkyWay")
    .controller('homeCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav,DeliveryDateService) {
      $scope.toggleSidenav = buildToggler('closeEventsDisabled');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

        this.myDate = new Date();

        $scope.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth() - 2,
        this.myDate.getDate()
      );

      $scope.maxDate = new Date();

      $scope.helpers({
        Customers: function(){

        return Customers.find()

      }
    });

    $scope.generateReport = function(fromDate, toDate){
      if(!fromDate || !toDate){
        alert("Please select the dates");
      }else{
        console.log("Selected from date is "+fromDate);
        console.log("Selected to date is "+toDate);
        $scope.Dates = DeliveryDateService;
        $scope.Dates.fromDate = fromDate;
        $scope.Dates.toDate = toDate;
        $state.go('report');
      }

      if(fromDate < toDate){
        console.log("From date is leser than to date");
      }

      if(fromDate >toDate){
        console.log("From date is greater than to date");
      }
    }

});
