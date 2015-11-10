/*Orders Controller */
(function(){
    
 var OrdersController = function($scope, $routeParams,customerFactory){
     
    console.log('orders.controller.js loaded');
     
    var customerId =  $routeParams.customerId;
     
    $scope.customer = {};
     
   function init(){
      customerFactory.getCustomer(customerId)
                 .success(function(customer){
                  console.log('Getting orders ');
                  $scope.customer = customer;
          
                 })
                 .error(function (data){
          
                 console.log(data);
          
                 });
   }
     
   init(); 
     
 };   

 
 angular.module('customerModule').controller('OrdersController',OrdersController);

    
})();