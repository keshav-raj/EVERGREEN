angular.module('milkyWay').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "client/main/views/login.html",
      controller: "loginCtrl"
    })
    .state('signUp', {
      url: "/signUp",
      templateUrl: "client/main/views/signUp.html",
      controller: "signUpCtrl"
    })
    .state('home', {
      url: "/home",
      templateUrl: "client/main/views/home.html",
      controller: "homeCtrl"
    })
    .state('deliver', {
      url: "/deliver/:customerId",
      templateUrl: "client/main/views/deliver.html",
      controller: "deliverCtrl"
    })
    .state('addCustomer', {
      url: "/addCustomer",
      templateUrl: "client/main/views/addCustomer.html",
      controller: "addCustomerCtrl"
    })
    .state('price', {
      url: "/price",
      templateUrl: "client/main/views/price.html",
      controller: "priceCtrl"
    })
    .state('quantity', {
      url: "/quantity",
      templateUrl: "client/main/views/quantity.html",
      controller: "quantityCtrl"
    })


});