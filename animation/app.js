var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider){

  $routeProvider

    .when('/home',{
      templateUrl: 'partial/home.html',
      controller : 'mainController'
    })

    .when('/about', {
      templateUrl: 'partial/about.html',
      controller : 'aboutController'
    })

    .when('/contact', {
      templateUrl: 'partial/contact.html',
      controller : 'contactController'
    });

});

animateApp.controller('mainController', function($scope){
  $scope.pageClass = 'page-home';
});

animateApp.controller('aboutController', function($scope){
  $scope.pageClass = 'page-about';
});

animateApp.controller('contactController', function($scope){
  $scope.pageClass = 'page-contact';
});