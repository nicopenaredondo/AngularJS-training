//create the module and name it app
var mainApp = angular.module('mainApp', ['ngRoute']);

//configure the routes
mainApp.config(function($routeProvider){
  $routeProvider

    //route for the home page
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    //route for the about page
    .when('/about',{
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    //route for the contact page
    .when('/contact',{
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    })
});
