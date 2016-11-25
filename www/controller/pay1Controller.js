app.controller("pay1Controller",['$scope','$http','$stateParams',function($scope,$http,$stateParams){
    $scope.pay = [];
    $http({
      url:'json/payoff'+$stateParams.id+'.json',
    }).success(function(res){
      $scope.pay = res.txt;
      console.log($scope.pay);
    })
}]);