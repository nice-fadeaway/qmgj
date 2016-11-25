
app.controller('safeemilController',['$scope','$interval',function($scope,$interval){
   $scope.vm = {
    data:'免费获取验证码',
    keidan:false,
    time:60
   }
   $scope.change = function(){
    $scope.vm.kedian =true;
    $interval(function(){
      $scope.vm.data = '查看手机'+$scope.vm.time;
      $scope.vm.time--;
      if($scope.vm.time == 0){
        $scope.vm.data = '重新获取';
        $scope.vm.kedian = 'false';
        $scope.vm.time = 60;
      }
    },1000,$scope.vm.time);
   }
}]);