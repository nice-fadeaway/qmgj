app.controller('pay2Controller',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
   $scope.pay2 = [];
   $scope.showIndex= 0;
   $scope.showIndex2 = 0;
    $scope.myFn = function(index){
      $scope.showIndex = index;
    }
    $scope.toggle2 = function(index){
      $scope.showIndex2 = index;
    }
   $http({
      url:'json/payoff'+$stateParams.id+'.json',
   }).success(function(res){
      $scope.pay2 = res.txt;
      console.log($scope.pay2);
   });
}]);