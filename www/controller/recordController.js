app.controller('recordController',['$scope','$http',function($scope,$http){
  $scope.showActive = 0;
  $scope.filterStatus = 0;
  $scope.myFilterModel = {"status":''};
  $scope.checkContent = function(i){
    $scope.myFilterModel.status = ['',0,1] [i];
    $scope.showActive = i;
  }


   $http({
    url:"json/record.json",
   }).success(function(res){
    $scope.slt = res.txt;
   })
}]);