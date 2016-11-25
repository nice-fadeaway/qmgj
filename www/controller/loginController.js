app.controller('loginController',['$scope',function($scope){
   $scope.radicAct={show:true};
   $scope.showIndex = 0;
   $scope.toggleBd=function(index){
      $scope.radicAct.show=!$scope.radicAct.show;
      $scope.showIndex = index;
   }
   

}]);