app.controller('perhomeController',['$scope','$http',function($scope,$http){
   $scope.home = [];
   $scope.btn = [];
   $http({
    url:'json/parhome.json',
   }).success(function(res){
    $scope.home = res.obj;
    $scope.btn = res.text;
   })
}]);