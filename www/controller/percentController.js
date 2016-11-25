app.controller('percentController',['$scope','$http',function($scope,$http){
  $scope.party = [];
  $scope.showIndex = 0;
   $scope.time = {
    today:(+new Date()),
   }
   $http({
    url:'json/party.json'
   }).success(function(res){
    $scope.party = res.user;
   });
   $scope.myFn = function(i){
    $scope.showIndex = i;
   };
}]);