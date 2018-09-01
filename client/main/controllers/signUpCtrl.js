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

      let email = $scope.user.email
      var usernameNo = $scope.user.number
      let username = usernameNo.toString();
      let password = $scope.user.password
      if (   email && username && password   ){

        Meteor.call('checkUser', email, username, function(err){
        if(err){
            if ( err.error === 'Email already Exists' ){

              if (Meteor.isCordova) {
                alert('Email already Exists');
              } else {
                alert('Email already Exists');
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
  		        Accounts.createUser({
              email:email,
              username: username,
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
