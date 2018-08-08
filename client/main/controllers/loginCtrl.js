angular.module("milkyWay")
    .controller('loginCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav) {

      $scope.toggleSidenav = buildToggler('closeEventsDisabled');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }

      $scope.login = function(){

      if( Meteor.status().connected === false ){
        if (Meteor.isCordova) {
          alert('Connection error.');

        }
        else {
          alert('Connection error.');
        }

        return;
      }

      let username = '+91'+$scope.user.number
      let password = $scope.user.password
      if (   username && password   ){

                Meteor.loginWithPhoneAndPassword(username, password, function(err){
                  if (err) {
                    if (Meteor.isCordova) {
                      alert('Invalid Mobile Number or Password.');
                    }
                    else {
                      alert('Invalid Mobile Number or Password.');
                    }
                  }
                  else {
                    console.log("Login successfull");
                    $state.go('home');
                  }
                });

          } else {
                alert('Please enter phone number and password');
          }
        };

    });
