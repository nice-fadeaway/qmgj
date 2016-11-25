app.controller('safemarkController',['$scope','$interval','$http',function($scope,$interval,$http){
    $scope.vm = {
      data:'免费获取验证码',
      kedian:false,
      time:60
    };
    $scope.nub = [];
    $scope.change = function(){
      $scope.vm.kedian =true;
      $interval(function(){
        $scope.vm.data = '查看手机 '+$scope.vm.time;
        $scope.vm.time--;
        if($scope.vm.time ==0){
          $scope.vm.data = '重新获取';
          $scope.vm.kedian = 'false';
          $scope.vm.time = 60;
        }
      },1000,$scope.vm.time);
    };
    $http({
      url:'json/safemark.json'
    }).success(function(res){
        $scope.nub = res.txt;
    });
}]);