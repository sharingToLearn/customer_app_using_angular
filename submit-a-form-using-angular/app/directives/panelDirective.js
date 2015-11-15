(function(){
    
  
     angular.module('usersModule').directive('panel', function() {
      return {
          restrict: 'E',
          replace: 'true',
          templateUrl: '/app/view/directive-templates/table-panel.html'  
      };
    });
    
    
})();