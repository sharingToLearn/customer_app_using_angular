(function(){
    
    var FileUploadController =  function($scope,$http){
    
        $scope.headerTitle='File Upload Example';
        
        
        $scope.filesChanged = function(elm){
            $scope.files = elm.files;
            $scope.$apply();
        } // end filesChanged
        
        $scope.upload =  function(){
            
            var fd = new FormData();
            angular.forEach($scope.files,function(file){
                fd.append('file',file);
            })
            
            $http.post('http://localhost:8080/countLinesOfCode/rest/fileservice/upload',fd,
                        {
                            transformRequest : angular.identity,
                            headers : {'Content-Type' : undefined}
                             
                        }
                      )
                        .success(function(response){
                            console.log(response);
                            $scope.linesOfCode = response;
                            
                        })
                        .error(function(response){
                            console.log(response);
                        });
                        
        } // end upload
    };
    
  
        
    
    angular.module('usersModule').controller('FileUploadController', FileUploadController);
    
})();