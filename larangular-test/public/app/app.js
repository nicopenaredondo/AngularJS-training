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
    },

    save : function(blog){
      return $http({
        method : 'POST',
        url : 'api/blog',
        headers : { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data : { 'title' : blog.title, 'body' : blog.body }
      });
    },

    update: function(blog){
      return $http.({
        method : 'PUT',
        url : 'api/v1/blog/'+ id,
        headers : { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data : { 'title' : blog.title, 'body' : blog.body }
      });
    },

    delete: function(id){
      return $http.({
        method: 'DELETE',
        url: 'api/v1/blog/' + id
      });
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