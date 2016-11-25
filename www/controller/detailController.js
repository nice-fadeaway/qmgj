app.controller('detailController',['$scope','$http',function($scope,$http){
    $scope.showActive = 2;
    $scope.myFilterModel = {status:'1'};
  
    $http({
   url:'json/detailaddone.json',
    }).success(function(res){
    $scope.detailcnt = res.text;
    $scope.toptxt = res.title;
    });
    $scope.checkContent = function(i){
      $scope.myFilterModel.status = ['',0,1,2,3,4,5,6,7,8,9] [i];
      $scope.showActive = i;
    }
}]);