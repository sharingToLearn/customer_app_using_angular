(function(){
    
    console.log('users.factory.js loaded !')
    var usersFactory = function($http){
        
        var factory = {};
        
        // get All Users
        factory.getAllUsers = function(){
           return $http.get('http://localhost:8080/countLinesOfCode/rest/userservice/users'); 
        };
        
        // add a User
        
        factory.createUser =  function(userId,name,email){
            return $http.post(
                'http://localhost:8080/countLinesOfCode/rest/userservice/addAndGetUser',
                {name: name,id:userId, email:email}
            ); 
        };
        return factory;
    };
    
    angular.module('mainApp').factory('usersFactory',usersFactory);
     
})();