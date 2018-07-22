angular.module('milkyWay').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "client/main/views/login.html"
    })
    .state('signUp', {
      url: "/signUp",
      templateUrl: "client/main/views/signUp.html"
    })
    .state('home', {
      url: "/home",
      templateUrl: "client/main/views/home.html"
    })
    .state('deliver', {
      url: "/deliver",
      templateUrl: "client/main/views/deliver.html"
    })
    .state('addCustomer', {
      url: "/addCustomer",
      templateUrl: "client/main/views/addCustomer.html"
    })
    .state('price', {
      url: "/price",
      templateUrl: "client/main/views/price.html"
    })


});
