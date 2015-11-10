/* Customer Controller*/
(function(){
    
    var CustomerController =  function($scope, $log, customerFactory){
        
        $scope.customers = [];
        
        function init(){
             customerFactory.getCustomers()
                 .success(function(customers){
                  $scope.customers = customers;
                 })
                 .error(function (data,status){
                 $log.log(data);
                 $log.log(status);
                 });    
        }
        
        init();
        
        
    };
    
    angular.module('customerModule').controller('CustomerController', CustomerController);
    
})();