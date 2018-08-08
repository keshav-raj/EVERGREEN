angular.module("milkyWay")
    .controller('homeCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav,$mdDialog,$translate,$window,DeliveryDateService) {
      $scope.trans = function(key) {
     $translate.use(key);
   };

      $scope.toggleSidenav = buildToggler('closeEventsDisabled');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

      //Check user login

      if(!Meteor.userId()){
        $state.go('login');
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
            $window.alert("Please select the dates");
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

       var alert;
       $scope.translateOptions = function ($event) {
         console.log("here");

          var parentEl = angular.element(document.querySelector('md-content'));
          alert = $mdDialog.alert({
            parent: parentEl,
            targetEvent: $event,
            templateUrl:'client/main/views/languageModal.html',
              locals: {
                closeDialog: $scope.closeDialog
              },
              bindToController: true,
              controllerAs: 'ctrl',
              controller: 'LanguageDialogController'
          });

            $mdDialog.show( alert )

          };

      $scope.closeDialog = function() {
          $mdDialog.hide();

        };

        $scope.logout = function() {
          Meteor.logout(function(err) {
            if (!err){
              $state.go('login')
            }
            else {
              if (Meteor.isCordova) {
                alert('Error. Please try again.');
              } else {
                alert('Error. Please try again.');
              }
              return
            }
          });
        };
});
