(function(){
    
    console.log('customerFactory loaded !')
    var customerFactory = function($http){
        
        var factory = {};
        
        // get all customers
        factory.getCustomers =  function(){
            return $http.get('http://localhost:8081/customers');
        }
        
        // get all customer by id 
        factory.getCustomer = function(customerId){
            return $http.get('http://localhost:8081/customer/' + customerId)
        }
        
        return factory;
    };
    
    angular.module('mainApp').factory('customerFactory',customerFactory);
     
})();