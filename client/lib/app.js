import angular from 'angular';
import angularMeteor from 'angular-meteor';
//import ngMaterial from 'angular-material';
//import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
angular.module('milkyWay', [
  angularMeteor,
  uiRouter,
  'ngAnimate',
  'ngMaterial',
  'pascalprecht.translate',
   'ngCookies'
]);
