/*Defining everything inside IFFE to avoid any thing to be kept in global scope, just to avoid variable name clash */ 
(function(){
  console.log('users.app.js is loaded.');
    var usersModule = angular.module('usersModule',['ngRoute','ngMessages']);
    
    usersModule
        .config(function($routeProvider){
        
            $routeProvider.when('/',
            {
                controller : 'UsersDataController',
                templateUrl: 'app/view/users.html'
            }).when('/upload',
            {
               controller : 'FileUploadController',
                templateUrl: 'app/view/file-upload.html' 
            });
        
        })
        .run(function(){
        
        });
})();