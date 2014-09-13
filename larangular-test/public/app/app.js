var larangularTestApp = angular.module('larangularTestApp', ['ui.router', 'xeditable']);

larangularTestApp.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('/',{
      url: '/',
      templateUrl: 'app/partial/blog.html',
      controller: 'blogController'
    })
  $urlRouterProvider.otherwise('/');

});


larangularTestApp.factory('Blog', function($http){
  return {
    get: function(){
      return $http.get('api/v1/blog');
    }
  }
});

larangularTestApp.controller('blogController',function($scope, $http,  Blog){
  $scope.message = 'test';
  Blog.get()
    .success(function(data){
      $scope.blogs = data
    });
});