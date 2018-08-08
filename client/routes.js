angular.module('milkyWay').config(function($stateProvider, $urlRouterProvider,$translateProvider) {

  $translateProvider.registerAvailableLanguageKeys(['tn_IN','en_US'], {
    'en_US': 'en_US',
    'en_UK': 'en_US',
    'tn_IN': 'tn_IN',
    'tn': 'tn_IN'
    });

    $translateProvider.useStaticFilesLoader({
      prefix: 'lang_',
      suffix: '.json'
    });

    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.preferredLanguage("en_US");
    $translateProvider.useCookieStorage();
    $translateProvider.fallbackLanguage("en_US");

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
    .state('report', {
      url: "/deliver",
      templateUrl: "client/main/views/report.html",
      controller: "reportCtrl"
    })
    .state('manageCust', {
      url: "/manageCust",
      templateUrl: "client/main/views/manageCust.html",
      controller: "manageCustCtrl"
    })
    .state('custDeteails', {
      url: "/custDeteails/:customerId",
      templateUrl: "client/main/views/custDeteails.html",
      controller: "custDeteailsCtrl"
    })
    .state('postDelivery', {
      url: "/postDelivery",
      templateUrl: "client/main/views/postDelivery.html",
      controller: "postDeliveryCtrl"
    })
    .state('customPostdeliver', {
      url: "/customPostdeliver/:customerId",
      templateUrl: "client/main/views/customPostdeliver.html",
      controller: "customPostdeliverCtrl"
    })


});
