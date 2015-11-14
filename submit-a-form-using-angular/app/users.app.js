/*Defining everything inside IFFE to avoid any thing to be kept in global scope, just to avoid variable name clash */ 
(function(){
  console.log('users.app.js is loaded.');
    var usersModule = angular.module('usersModule',['ngRoute']);
    
    usersModule
        .config(function($routeProvider){
        
            $routeProvider.when('/',
            {
                controller : 'UsersDataController',
                templateUrl: 'app/view/users.html'
            });
        
        })
        .run(function(){
        
        });
    
   
/*    console.log('user.app.js loaded');
    var customersApp = angular.module('customerModule',['ngRoute']);
    
    customersApp
        .config(function($routeProvider){
            console.log('Customers App Configuring Route');
            console.log(angular.module('customerModule'));
        $routeProvider
            .when('/',
            {
                    controller:'CustomerController',
                    templateUrl: 'app/view/customers.html'
            })
            .when('/orders/:customerId',
            {
                    controller:'OrdersController',
                    templateUrl: 'app/view/orders.html'
            });
     
        })
        .run(function(){
            console.log('Customers App Run Hook');
        });*/
})();