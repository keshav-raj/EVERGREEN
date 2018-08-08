angular.module("milkyWay")
    .controller('signUpCtrl', function($scope,$state,$stateParams,$meteor,$mdSidenav) {

      $scope.toggleSidenav = buildToggler('closeEventsDisabled');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }



      $scope.register = function(){

        //console.log($scope.user.number+$scope.user.password);

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

        Meteor.call('checkUser', username, function(err){
        if(err){
            if ( err.error === 'Mobile Number already Exists' ){

              if (Meteor.isCordova) {
                alert('Mobile Number already Exists');
              } else {
                alert('Mobile Number already Exists');
              }

              return;
            }
            else {
              if (Meteor.isCordova) {
                alert('Error. Please try again.');
              } else {
                alert('Error. Please try again.');
              }

              return;
            }
          }
          else {
  		        Accounts.createUserWithPhone({
              phone: username,
              password: password
            },
            function(err){
              if(err){
              alert("Error. Please try again")
              }
              else{
                $state.go('home');
                return
              }
            });
          }
        });
      }
      else {
        alert('Please enter phone number and password');
      }
    };


    });
