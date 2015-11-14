/* Customer Controller*/
(function(){
    
    var UsersDataController =  function($scope, $log, usersFactory, $http){
        
        $scope.users = [];
        
        // Add a User
        $scope.addUser = function createUser(){
            console.log('Adding user '+$scope.name+' and email '+$scope.email + $scope.userId);
            
            usersFactory.createUser($scope.userId,$scope.name,$scope.email).then(function successCallBack(response){
                    console.log('Data pushed');
                    console.log(response.data);
                    $scope.users=response.data;
                
            }, function errorCallBack(response){
                    console.log('Error');
                    console.log(response);  
            });
        }
        
        //Get All Users
        $scope.getUsers = function getAllUsers(){
          usersFactory.getAllUsers()
                .success(function(users){
                    console.log('Getting all Users ');
                    console.log(users);
                    $scope.users=users;
                })
                .error(function(data,status){
                    $log.log(data);
                    $log.log(status); 
                });
        }
        
        
        
    };
    
    angular.module('usersModule').controller('UsersDataController', UsersDataController);
    
})();