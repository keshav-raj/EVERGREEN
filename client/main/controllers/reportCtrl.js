angular.module("milkyWay")
    .controller('reportCtrl', function($scope,$rootScope,$state,$stateParams,$meteor,$mdSidenav,DeliveryDateService) {

      $scope.toggleSidenav = buildToggler('closeEventsDisabled');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }

      $scope.Dates = DeliveryDateService;
      function formatDate(Dates){
      let fromDate = Dates.fromDate;
      fromDate.setHours(00,00,00,00);
      let toDate = Dates.toDate;
      toDate.setHours(23,59,59,00);

      this.dates = {
        fromDate:fromDate,
        toDate:toDate
      };

      return dates
      };

      var formatedDates = formatDate($scope.Dates);

      console.log(formatedDates);

      $scope.helpers({
        Deliveries: function(){

        return Deliveries.find({deliveryDate:{
                  '$gte': new Date(formatedDates.fromDate),
                  '$lt': new Date(formatedDates.toDate)}});

      }
    });


    });
