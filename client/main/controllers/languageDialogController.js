angular.module("milkyWay")
.controller('LanguageDialogController', function($scope, $stateParams, $state, $mdDialog,$translate) {
  console.log($translate);
  $scope.trans = function(key) {
 $translate.use(key);
};



});
