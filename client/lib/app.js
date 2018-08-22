//import angular from 'angular';
//import angularMeteor from 'angular-meteor';
//import ngMaterial from 'angular-material';
//import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
angular.module('milkyWay', [
  angularMeteor,
  uiRouter,
  'ngAnimate',
  'ngMaterial',
  'pascalprecht.translate',
   'ngCookies',
   'ngMessages'
]);

// function onReady() {
//   angular.bootstrap(document, ['milkyWay']);
//   if(Meteor.isCordova){
//     navigator.splashscreen.hide();
//   }
// }
//
// if (Meteor.isCordova) {
//   angular.element(document).on('deviceready', onReady);
// } else {
//   angular.element(document).ready(onReady);
// }
