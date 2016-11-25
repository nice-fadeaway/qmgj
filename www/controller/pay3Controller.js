app.controller('pay3Controller',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
   $scope.pay3 = [];
   $http({
    url:'json/payoff'+$stateParams.id+'.json'
   }).success(function(res){
    $scope.pay3 = res.txt;
   })
}]);